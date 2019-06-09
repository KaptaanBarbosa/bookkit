import React,{Component} from 'react';
var ReactDOM = require('react-dom');

import {
    Card,Row, Col,Button,Panel,FormGroup,FormControl,FormLabel,Modal
    } from 'react-bootstrap'; 

   
import {addbooks} from '../../actions/booksaction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class BooksForm extends Component{
      constructor(props) {
            super(props);
        
            this.handleShow = this.handleShow.bind(this);
            this.handleClose = this.handleClose.bind(this);
            this.handleShowModal = this.handleShowModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.state = {
                show: false,
            };
        }
    
      handleClose() {
        this.setState({ show: false });
      }
     
      handleShow() {
        this.setState({ show: true });
      }
    
      handleShowModal() {
        this.setState({ show: !this.state.show });
      }

     handleSubmit(){
         console.log("@@@@@@@",this);
         const data = {
            title : document.getElementById('title').value,
            description:document.getElementById('description').value,
            price:'Rs '+ document.getElementById('price').value.toString()
         };
        console.log("data:",data,"props \n",this.props);
        this.props.addbooks(data);
        this.handleClose();
     }
    render(){
        console.log("This is working 2",this.props.books);
            return (
                <>
                <button className="btn btn-default btn-primary" onClick={this.handleShowModal}>Add Books</button>

                  <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Title</label>
                            <input type="text" class="form-control" id="title" aria-describedby="title" placeholder="Enter Title"/>
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea type="text" class="form-control" id="description" placeholder="description"/>
                        </div>
                        <div class="form-group">
                            <label for="price">Enter Price</label>
                            <input type="text" class="form-control" id="price" aria-describedby="title" placeholder="Enter Title"/>
                        </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={this.handleSubmit}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              )
    }

}    

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({addbooks},dispatch)
}

const mapStateToProps = (state) =>{
    return{
      books:state.books,
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(BooksForm);