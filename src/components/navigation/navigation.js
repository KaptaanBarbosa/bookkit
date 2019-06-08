import React, { Component } from "react";
import {
    Nav,Navbar,Form,FormControl,Button
  } from 'react-bootstrap'; 

class NavigationBar extends Component{
        render(){
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
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>
            <br />
           </> 
           )
        }
}

export default NavigationBar;