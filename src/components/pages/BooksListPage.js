import React, {
    Component,
    Fragment
}
from 'react';
import {
    Container,Row, Col,Button
  } from 'react-bootstrap'; 

import {connect} from 'react-redux';
import {
    fetchbooksuccess
} from '../../actions/booksaction';
import {bindActionCreators} from 'redux';
import BookItem from '../templates/bookitem'
import BooksForm from '../templates/booksForm'
import Cart from '../templates/Cart'
import NavigationBar from '../navigation/navigation'
class BooksListPage extends Component {
    constructor(props){
      super(props)
        this.state = {
            showModal:false
        }
      this.handleHideModal = this.handleHideModal.bind(this);
      this.handleShowModal = this.handleShowModal.bind(this);

    }
    getInitialState(){
        return {showModal: false}
    }
    handleHideModal(){
        this.setState({showModal: false})
    }
    handleShowModal(){
         
        this.setState({showModal: true})
    }
 render(){
     
    const bookItem = this.props.books.books.map((books)=>{
        return (
           <Col lg={4} sm={4} md={4}> 
            <BookItem books={books}/>
           </Col>
        )
    })
    return(
        <>
        <style type="text/css">
        {`
        .btn-flat {
          background-color: purple;
          color: white;
        }
    
        .btn-xxl {
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
        }
        `}
      </style>
         <Row style={{marginTop:'20px'}}>
            {bookItem}
         </Row> 
         <div className="row">
         <button className="btn btn-default btn-primary" onClick={this.handleShowModal}>Add Books</button>
         {this.state.showModal ? <BooksForm handleHideModal={this.handleHideModal}/> : null}
        </div>
    </>
    
     )
 }


}
const mapStateToProps = (state) => {
    return {
        books: state.books,
        cart: state.cart.cart
    }
  }    
 
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getbook: fetchbooksuccess,
    },dispatch);
  }
 
 export default connect(mapStateToProps, mapDispatchToProps)(BooksListPage);