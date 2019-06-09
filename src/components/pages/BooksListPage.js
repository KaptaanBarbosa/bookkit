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
    fetchbooksuccess,showaddbooks
} from '../../actions/booksaction';
import {bindActionCreators} from 'redux';
import BookItem from '../templates/bookitem'
import BooksForm from '../templates/booksForm'
import NavigationBar from '../navigation/navigation'
class BooksListPage extends Component {
    constructor(props){
      super(props)
        this.state = {
            showModal:false
        }
      this.handleHideModal = this.handleHideModal.bind(this);

    }
    getInitialState(){
        return {showModal: false}
    }
    handleHideModal(){
        this.setState({showModal: false})
    }

    render(){
        console.log("&&&&&&&&&",this.props)
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
        getbook: fetchbooksuccess,showaddbooks
    },dispatch);
  }
 
 export default connect(mapStateToProps, mapDispatchToProps)(BooksListPage);