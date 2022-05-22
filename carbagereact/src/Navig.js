import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';

export default class Navig extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Carbage</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Total CF</Nav.Link>
                  <Nav.Link href="#link">Reduce CF</Nav.Link>
                  <Nav.Link href="#link">Help</Nav.Link>
                  <Nav.Link href="#link">Profile</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      }
}