import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Col,Row,Button} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

class Cart extends Component{

    renderEmptyCart(){
        return (<div>
              <h4> Your cart is empty !!!</h4>
            </div>);
    }

    renderCart(){
        const cartItemList = this.props.cart.map((cartItem)=>{
            return(
                <Row>
                   <Col xs={12} sm={4}>
                      <h6>{cartItem.title}</h6>
                      <h6>{cartItem.description}</h6>
                      <h6>{cartItem.price}</h6>
                    <Button bsStyle='primary'>Buy now</Button>
                   </Col>
                </Row>
       
               )
        })
       
    }

    render(){
        if(this.props.cart[0]){
            return this.renderCart();
        }
        else{
            this.renderEmptyCart();
        }
    }



}

const mapDispatchToProps = (dispatch) =>{
   return bindActionCreators({
      anyaction:function(){ return true}
   })
}

const mapStateToProps = (state) => {
  return {
    cart:state.cart.cart
  }
}

export default connect(mapStateToProps,null)(Cart)