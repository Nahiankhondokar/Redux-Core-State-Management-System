import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const Staff = () => {
  return (
    <>
   
            <Card>
                   <Card.Header>
                    <h2>Staff Account</h2>
                   </Card.Header>
                   <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control value=''></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Age</Form.Label>
                                <Form.Control value=''></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Skill</Form.Label>
                                <Form.Control value=''></Form.Control>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Button variant='info' type='submit'>Submit</Button>
                            </Form.Group>
                        </Form>
                   </Card.Body>
                   <Card.Footer>
                       <h2></h2>
                   </Card.Footer>

               </Card>
   </>
  )
};

export default Staff;