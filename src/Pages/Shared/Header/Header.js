import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut, isLogin} = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Traveller's Paradise</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="text-white" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className="text-white">Services</Nav.Link>
                        <Nav.Link as={Link} to="/myOrder" className="text-white">My Orders</Nav.Link>
                        <Nav.Link as={Link} to="/admin" className="text-white">Admin</Nav.Link>
                        
                        {user?.email && isLogin ?
                            <Button onClick={logOut} variant="light">Logout</Button>:
                            <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>}
                    <Navbar.Text>
                         <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;