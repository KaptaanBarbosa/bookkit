import React, { Component } from "react";
import {
    Nav,Navbar,Form,FormControl,Button
  } from 'react-bootstrap'; 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class NavigationBar extends Component{
        
        showCartWindow(e){
          console.log("------->>>>>>",e)   
        }

        render(){
            console.log("-------->>>>>",this.props.itemsInCart.cart.length);
           return(
            <>
            <Navbar bg="dark" variant="dark" style={{width:'100%'}}>
              <Navbar.Brand href="#home">BookCart</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/Home">Home</Nav.Link>
                <Nav.Link href="/Productlist">Productlist</Nav.Link>
                <Nav.Link href="/Cart">Cart</Nav.Link>
                <Nav.Link href="/Checkout">Checkout</Nav.Link>

              </Nav>
              <Form inline>
              <Button onClick={this.showCartWindow} bg="dark" variant="dark" class="btn">
                Cart <span class="badge badge-info">{this.props.itemsInCart.cart.length}</span>
               </Button>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>
            <br />
           </> 
           )
        }
}

const mapStateToProps = (state) =>{
  return {
      itemsInCart:state.cart
  }
}

export default connect(mapStateToProps,null)(NavigationBar);