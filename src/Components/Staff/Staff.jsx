import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { StaffActions } from '../../redux/actions/staffActions';

const Staff = () => {

    const data = useSelector(state => state.staffInput.inputFeilds);
    const dispatch = useDispatch();

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
                                <Form.Control value={ data.name } onChange={ (e) => dispatch(StaffActions({ name : e.target.value })) }></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Age</Form.Label>
                                <Form.Control value={ data.age } onChange={ (e) => dispatch(StaffActions({ age : e.target.value })) }></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Skill</Form.Label>
                                <Form.Control value={ data.skill } onChange={ (e) => dispatch(StaffActions({ skill : e.target.value })) }></Form.Control>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Button variant='info' type='submit'>Submit</Button>
                            </Form.Group>
                        </Form>
                   </Card.Body>
                   <Card.Footer>
                       <h2>{ data.name }</h2>
                   </Card.Footer>

               </Card>
   </>
  )
};

export default Staff;