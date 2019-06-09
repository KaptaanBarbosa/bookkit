import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Col,Row,Button} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

class Cart extends Component{

    renderEmptyCart(){
        return (<div><h4> Your cart is empty !!!</h4></div>);
    }

    renderCart(){
            return(
                <div class="table-responsive">
                <table class="table">
                
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 bg-light">
                        <div class="p-2 px-3 text-uppercase">Product</div>
                      </th>
                      <th scope="col" class="border-0 bg-light">
                        <div class="py-2 text-uppercase">Price</div>
                      </th>
                      <th scope="col" class="border-0 bg-light">
                        <div class="py-2 text-uppercase">Quantity</div>
                      </th>
                      <th scope="col" class="border-0 bg-light">
                        <div class="py-2 text-uppercase">Remove</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    this.props.cart.map((cartItem)=>{
                     return(
                      <tr>
                      <th scope="row" class="border-0">
                        <div class="p-2">
                          <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg" alt="" width="70" class="img-fluid rounded shadow-sm"/>
                          <div class="ml-3 d-inline-block align-middle">
                            <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">Timex Unisex Originals</a></h5><span class="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
                          </div>
                        </div>
                      </th>
                      <td class="border-0 align-middle"><strong>$79.00</strong></td>
                      <td class="border-0 align-middle"><strong>3</strong></td>
                      <td class="border-0 align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a></td>
                    </tr>
                    )})
                    }
                   
                  </tbody>
                </table>
              </div>
       
               )
       
        return cartItemList;
    }

    render(){
        console.log("Props....",this.props)
        if(this.props.cart[0]){
            return this.renderCart();
        }
        else{
            return this.renderEmptyCart();
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

export default connect(mapStateToProps)(Cart)