import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="col-md-4 m-auto">
                <Card style={{ width: '100%', padding: '4%', marginTop: '150px' }}>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Form className="mt-5">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" name="email" style={{ border: 'none', borderBottom: '1px solid gray' }}  placeholder="username or email" required />
                            </Form.Group>

                            <Form.Group className="mt-5" controlId="formBasicPassword">
                                <Form.Control type="password" name="password" style={{ border: 'none', borderBottom: '1px solid gray' }} placeholder="password" required/>

                            </Form.Group>
                            <div className="d-flex justify-content-between">
                                <Form.Group>
                                    <Form.Check
                                        label="Remember Me"
                                        feedback="You must agree before submitting."
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <a href="#" style={{ color: '#F9A51A'}} >Forgot Password</a>
                                </Form.Group>
                            </div>
                            <Button className="mt-5 rounded-0" style={{ width: '100%', backgroundColor: '#F9A51A', color: 'black' }} type="submit">
                                Login
                            </Button>
                            <Form.Text className="text-center mt-3" style={{ fontSize: '17px' }}>
                                Don't have account?<Link to="/register" style={{ color: '#F9A51A' }}>Create an Account</Link>
                            </Form.Text>

                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Login;