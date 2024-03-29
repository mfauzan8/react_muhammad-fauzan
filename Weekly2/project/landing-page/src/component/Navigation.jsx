import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../img/Logo.png'

const Navigation = () => {
    return (
        <>
            <Navbar variant="dark" bg="transparent">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav className="ms-auto text-white fw-bold">
                        <Nav.Link className="me-3" href="#home">Home</Nav.Link>
                        <Nav.Link className="me-3" href="#contact">Contact</Nav.Link>
                        <Nav.Link className="me-3" href="#features">About Us</Nav.Link>
                        <Nav.Link className="me-3" href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;