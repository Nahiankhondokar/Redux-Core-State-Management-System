import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setInputFeilds } from '../../redux/actions/studentActions';


const Student = () => {

    const { name, age, skill } = useSelector(state => state.studentInput.inputFeilds);
    const dispatch = useDispatch();

  return (
   <>
   <Card>
                   <Card.Header>
                    <h2>Student Account</h2>
                   </Card.Header>
                   <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={name} onChange={ e => dispatch(setInputFeilds({ name : e.target.value })) }></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Age</Form.Label>
                                <Form.Control value={age} onChange={ e => dispatch(setInputFeilds({ age : e.target.value })) }></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Skill</Form.Label>
                                <Form.Control value={skill} onChange={ e => dispatch(setInputFeilds({ skill : e.target.value })) }></Form.Control>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Button variant='info' type='submit'>Submit</Button>
                            </Form.Group>
                        </Form>
                   </Card.Body>
                   <Card.Footer>
                       <h2>{name}</h2>
                   </Card.Footer>

               </Card>
   </>
  )
};

export default Student;