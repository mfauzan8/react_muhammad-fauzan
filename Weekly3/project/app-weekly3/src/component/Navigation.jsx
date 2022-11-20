import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../img/Logo.png'
import { Link } from 'react-router-dom'

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
                        <Nav.Link className="me-3" href="">Home</Nav.Link>
                        <Nav.Link className="me-3" href="#contact">Contact</Nav.Link>
                        <Nav.Link className="me-3" href="#aboutus">About Us (Hasura)</Nav.Link>
                        <Link className="me-3 pt-2" style={{ textDecoration: "none", color: "white" }} to="/public-api">
                            Public Api
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;