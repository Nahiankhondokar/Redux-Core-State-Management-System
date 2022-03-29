
import './App.css';
import Staff from './Components/Staff/Staff';
import Student from './Components/Student/Student';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

function App() {
  return (
    <>

    <Container>
       <Row>
           <Col md={4} className='my-5 m-auto'>
              <Student></Student>
           </Col>
           <Col md={4} className='my-5 m-auto'>
              <Staff></Staff>
           </Col>
       </Row>
   </Container>
    
    </>
  );
}

export default App;
