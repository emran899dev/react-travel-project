import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="col-md-4 m-auto">
                <Card style={{ width: '100%', padding: '4%', marginTop: '150px' }}>
                    <Card.Body>
                        <Card.Title>Create an account</Card.Title>
                        <Form className="mt-5">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text"  name="firstname" style={{ border: 'none', borderBottom: '1px solid gray' }} placeholder="first name"  required/>
                            </Form.Group>
                            <Form.Group className="mt-4" controlId="formBasicPassword">
                                <Form.Control type="text"  name="lastname" style={{ border: 'none', borderBottom: '1px solid gray' }} placeholder="last name" required />
                            </Form.Group>
                            <Form.Group className="mt-4" controlId="formBasicPassword">
                                <Form.Control type="email"  name="email" style={{ border: 'none', borderBottom: '1px solid gray' }} placeholder="Username or Password" required />
                            </Form.Group>
                            <Form.Group className="mt-4" controlId="formBasicPassword">
                                <Form.Control type="password"  name="password" style={{ border: 'none', borderBottom: '1px solid gray' }} placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mt-4" controlId="formBasicPassword">
                                <Form.Control type="password"  name="confirmPassword" style={{ border: 'none', borderBottom: '1px solid gray' }} placeholder="Confirm Password" required />
                            </Form.Group>
                            <Button className="mt-4 rounded-0" style={{ width: '100%', backgroundColor: '#F9A51A', color: 'black' }} type="submit">
                                Create an Account
                            </Button>
                            

                            <Form.Text className="text-center mt-3" style={{ fontSize: '17px' }}>
                                Already have account?<Link to="/login" style={{ color: '#F9A51A' }}>Login</Link>
                            </Form.Text>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Register;