import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid style={{ margin: "0px 100px 0px 100px" }}>
        <Navbar.Brand href="#">
          <img
            src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Kula-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              title="Product"
              id="navbarScrollingDropdown"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href="#action3">Kula Outreach</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Kula Circles</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#action2">Our Story</Nav.Link>
            <NavDropdown
              title="Resources"
              id="navbarScrollingDropdown"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href="#action3">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Guides</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button className="d-flex navButton">Book a Demo</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
