import {React,Component} from 'react';
import {
  Card,Row, Col,Button
  } from 'react-bootstrap'; 
class BookItem extends Component{
  render(){
   const books = this.props.books;
 console.info("books:::::::::",books);
      return(
        <Row key={books.id}> 
        <Col xs={12}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{books.title}</Card.Title>
          <Card.Text>
          {books.description}
          </Card.Text>
          <Card.Text>
          {books.price}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
       </Col>    
        </Row>
      );
  }

}

export default BookItem