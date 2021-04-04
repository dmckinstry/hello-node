import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const Header = () => {
    return (
        <Navbar bg="light" expand="xl">
            <Navbar.Brand href="/">Demo_App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/other">Other</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
