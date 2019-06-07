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
class BooksListPage extends Component {
    
 render(){
     
    const bookItem = this.props.books.books.map((books)=>{
        return (
           <Col xs={12} sm={6} md={4}> 
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
         <Container>
         <Row>
          {bookItem}
         </Row> 
         </Container>
    </>
    
     )
 }


}
const mapStateToProps = (state) => {
    return {
        books: state.books
    }
  }    
 
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getbook: fetchbooksuccess,
    },dispatch);
  }
 
 export default connect(mapStateToProps, mapDispatchToProps)(BooksListPage);