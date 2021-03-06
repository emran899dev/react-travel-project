import React, { useContext, useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/Logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import firebaseConfig from '../Login/firebaseConfig';
const Header = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    });

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
// User SignOut
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: ''
                }
                setUser(signOutUser);
                setLoggedInUser(signOutUser);
                history.replace(from);
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <>
            <Navbar expand="lg" style={{ margin: '0% 0%', width: '100%' }} bg="primary" fixed="top">
                <Navbar.Brand ><img style={{ height: '40px' }} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline style={{ width: '35%', marginLeft: '5%', color: '#fff' }}>
                        {/* <FontAwesomeIcon style={{position: 'absolute',marginLeft:'10px'}} icon={faSearch} /> */}
                        <FormControl type="text" style={{ paddingLeft: '35px', width: '100%' }} placeholder="Search" className="mr-sm-2" />
                    </Form>
                    <Nav className="ml-auto">

                        <Nav.Link className="mx-4 "><strong><Link to="/" className="text-decoration-none text-light">News</Link></strong></Nav.Link>


                        <Nav.Link className="mx-4 text-light"><strong><Link to="/destination" className="text-decoration-none text-light">Destination</Link></strong></Nav.Link>

                        <Link to="/blog" className="text-decoration-none"><Nav.Link className="mx-4 text-light"><strong>Blog</strong></Nav.Link></Link>
                        <Link to="/contact" className="text-decoration-none"><Nav.Link className="mx-4 text-light"><strong>Contact</strong></Nav.Link></Link>
                        {
                            loggedInUser.email ? <Button onClick={handleSignOut} style={{ backgroundColor: '#F9A51A', color: 'black' }} className="px-3 mx-5"><strong>Sign-out</strong></Button> : <Link to="/login" className="text-decoration-none"><Button style={{ backgroundColor: '#F9A51A', color: 'black' }} className="px-5 mx-5 text-dark"><strong>Login</strong></Button></Link>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;