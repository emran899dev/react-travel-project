import React, { useContext, useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/Logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import './Header'
import { Link} from 'react-router-dom';
const Header = () => {
    
    return (
        <>
            <Navbar expand="lg" style={{margin: '0% 0%', width: '100%'}} bg="primary" fixed="top">
            <Navbar.Brand ><img style={{height: '40px'}} src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline style={{width:'35%',marginLeft:'5%',color:'#fff'}}>
                        {/* <FontAwesomeIcon style={{position: 'absolute',marginLeft:'10px'}} icon={faSearch} /> */}
                        <FormControl type="text" style={{paddingLeft:'35px',width:'100%'}} placeholder="Search" className="mr-sm-2" />
                    </Form>
                    <Nav className="ml-auto">
                    
                    <Nav.Link  className="mx-4 "><strong><Link to="/" className="text-decoration-none text-light">News</Link></strong></Nav.Link>
                    
                    
                    <Nav.Link  className="mx-4 text-light"><strong><Link to="/destination" className="text-decoration-none text-light">Destination</Link></strong></Nav.Link>
                    
                    <Link to="/blog" className="text-decoration-none"><Nav.Link  className="mx-4 text-light"><strong>Blog</strong></Nav.Link></Link>
                    <Link to="/contact" className="text-decoration-none"><Nav.Link  className="mx-4 text-light"><strong>Contact</strong></Nav.Link></Link>
                    <Link to="/login" className="text-decoration-none"><Button variant="outline-light">Login</Button></Link> 
                    
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;