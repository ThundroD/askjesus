import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="danger" variant="dark" expand="lg">
            <Navbar.Brand href="/">
                <div className="brand-container">
                    <img
                        src="/pics/cross.png"
                        width="100"
                        height="100"
                        className="d-inline-block align-middle"
                        alt="Logo"
                    />
                    <span className="brand-text align-middle"><strong>Jesus AMA</strong></span>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    {/* Apply custom styles to Nav.Link */}
                    <Nav.Link as={NavLink} to="/wwjd" style={{ fontWeight: 'bold', color: 'white' }}>
                        What Would Jesus Do
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/blog" style={{ fontWeight: 'bold', color: 'white' }}>
                        Blog
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;

