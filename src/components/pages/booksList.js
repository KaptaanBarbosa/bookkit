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
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Putak Bhandar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pustak Shrankhla</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pustak Prashth</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">galla</a>
                </li>
              </ul>
            </div>
          </nav>
          <hr></hr>
            <Container class="container-fluid">
    
    
              <Row>
                <Col>
                  {this.props.books.books.map((contact) => (
    
                    <Card className="col-sm">
                      <CardBody>
                        <CardTitle className="h3 mb-2 pt-2 font-weight-bold">{contact.title}</CardTitle>
                        <CardSubtitle className="mb-3 font-weight-light text-uppercase">{contact.description}</CardSubtitle>
                        <CardText className="mb-4">{contact.price}</CardText>
                        <Row>
    
                        <Col>
                              <Button color="success">UpOrDown</Button>
                        </Col>
                        <Col sm={'auto'}>
                              <Button color="warning">Add a review</Button>
                        </Col>
                        <Col sm={'auto'}>
                              <Button color="success">AddtoCart</Button>
                        </Col>
                        </Row>
                      </CardBody>
                    </Card>
                    
    
                  ))}
                </Col>
              </Row>
              <Row>
              <Button class="btn btn-info btn-lg" onClick={this.props.getbook}>
              <span class="glyphicon glyphicon-refresh"></span>
              refresh
             </Button>
             </Row>
            </Container>
          </Fragment>
           
            
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