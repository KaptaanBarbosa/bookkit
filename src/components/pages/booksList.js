import React, {
    Component,
    Fragment
}
from 'react';
import {
    Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button
  } from 'reactstrap';  

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

        return (<div> 
            <Fragment>
            <Navbar color="faded" light expand="md">
    
              <NavbarBrand href="/">
                React Bootstrap Example
              </NavbarBrand>
              <Nav className="ml-auto" navbar>
    
                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="/">Home</NavLink>
                </NavItem>
                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
                    Tutorial
                  </NavLink>
                </NavItem>
    
    
              </Nav>
            </Navbar>
    
            <Container fluid>
    
    
              <Row>
                <Col>
                  {this.props.books.books.map((contact) => (
    
                    <Card>
                      <CardBody>
                        <CardTitle className="h3 mb-2 pt-2 font-weight-bold">{contact.title}</CardTitle>
                        <CardSubtitle className="mb-3 font-weight-light text-uppercase">{contact.description}</CardSubtitle>
                        <CardText className="mb-4">{contact.price}</CardText>
                        <Row>
    
                        <Col>
                              <Button color="success">Call</Button>
                        </Col>
                        <Col sm={'auto'}>
                              <Button color="warning">Message</Button>
                        </Col>
                        <Col sm={'auto'}>
                              <Button color="success">Email</Button>
                        </Col>
                        </Row>
                      </CardBody>
                    </Card>
    
    
    
                  ))}
                </Col>
              </Row>
    
            </Container>
          </Fragment>
            <button onClick={this.props.getbook}></button>
            
            </div>)
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