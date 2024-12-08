import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const AppNavbar = ({ walletAddress, userType }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Medical ID</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {!walletAddress && <Nav.Link href="/signin">Sign In</Nav.Link>}
                    </Nav>
                    
                    {walletAddress && (
                    <Navbar.Text>
                        Signed in as: <span>{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
                    </Navbar.Text>
                )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
