import React,{Component} from 'react';
var ReactDOM = require('react-dom');

import {
    Card,Row, Col,Button,Panel,FormGroup,FormControl,FormLabel,
    } from 'react-bootstrap'; 

   
import {fetchbooksuccess} from '../../actions/booksaction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class BooksForm extends Component{
    constructor(props){
        super(props);   
      
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        console.log("This is working 1");
        $(ReactDOM.findDOMNode(this)).modal('show');
        $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal);
    }
     handleSubmit(){
         console.log(this);
         const data = [{
            title : document.getElementById('title').value,
            description:document.getElementById('description').value,
            price:'Rs '+ document.getElementById('price').value.toString()
         }];
        console.log("data:",data);
        this.props.getbook(data);
     }
    render(){
        console.log("This is working 2");

        return(
            <div>

            <div className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title">Modal title</h4>
                </div>
                <div className="modal-body">
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
                </div>
                <div className="modal-footer">
                  <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>


     
          </div>
        )
    }

}    

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({ getbook: fetchbooksuccess
 },dispatch)
}

export default connect(null,mapDispatchToProps)(BooksForm);