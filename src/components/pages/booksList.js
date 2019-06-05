import React, {
    Component
}
from 'react'

import {connect} from 'react-redux';
import {
    fetchbooksuccess,
    fetchbookfailure,
    fetchbook
} from '../../actions/booksaction'
import {bindActionCreators} from 'redux';
class BooksList extends Component {
    
    render() {
        const books = this.props.books;
        console.log("BOOKS:\n",books,"Props \n",this.props)
        const ListOfBooks = books ? books.books.map((booksarr)=>{
            return (<div key={booksarr.id}>
                <h2> {booksarr.title}</h2>
                <h2> {booksarr.description}</h2>
                <h2> {booksarr.price}</h2>
                </div>)
        }) : <div> NO book available</div>
        return (<div> {ListOfBooks} <button onClick={this.props.getbook}></button></div>)
        }
    }

 const mapStateToProps = (state) => {
   return {
       books: state.books
   }
 }    
console.log("fetchbooksuccess", fetchbooksuccess())

 const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
       getbook: fetchbooksuccess,
   },dispatch);
 }

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);