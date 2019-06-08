import {React,Component} from 'react';
import {
  Card,Row, Col,Button
  } from 'react-bootstrap'; 
  
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';  
import {addtocartsuccess} from '../../actions/cartactions'
class BookItem extends Component{

  constructor(props){
      super(props);
      this.addItemInCart = this.addItemInCart.bind(this);
  }  
  addItemInCart(){
   console.log('hgfgfgh',this.props)   
   const books = {
       id:this.props.books.id,
       title:this.props.books.title,
       description:this.props.books.description,
       price:this.props.books.price
   }
   this.props.addtocart(books);
  }
  render(){
   const books = this.props.books;
      return(
        <div key={books.id} > 
        <Card style={{"margin-bottom":"20px"}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{books.title}</Card.Title>
          <Card.Text>
          {books.description}
          </Card.Text>
          <Card.Text>
          {books.price}
          </Card.Text>
          
          <Button variant="primary">Buy now</Button>
           <div style={{'width':'25px','padding-bottom':'20px'}}></div>
          <Button onClick={this.addItemInCart} className="btn-flat">Add to Cart</Button>

        </Card.Body>
      </Card>
        </div>
      );
  }

}

const mapDispatchToProps = (dispatch) =>{
 return bindActionCreators({addtocart:addtocartsuccess},dispatch);
}
const mapStateToProps = (state) =>{
  return {
      cart:state.cart
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookItem)