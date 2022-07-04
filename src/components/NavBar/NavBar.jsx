import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.scss";

import { Link } from "react-router-dom";

import { Navbar, Nav, Dropdown, Button, ButtonGroup } from "react-bootstrap";
import { Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar className="containerNav" expand="lg">
      <Container fluid>
        <Navbar.Brand>MERCEDES LLANOS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "500px" }}
            navbarScroll
          >
            <Link className="linkNav" to={`/`}>Home</Link>

            <Dropdown className="buttonWork" as={ButtonGroup}>
              <Button variant="success">Work</Button>
              <Dropdown.Toggle
                // split
                // variant="success"
                id="dropdown-split-basic"
              />
              <Dropdown.Menu>
                <Link to={`/Work2022`}><Dropdown.Item href="#/action-2">2022</Dropdown.Item></Link>
                <Dropdown.Item href="#/action-3">2021</Dropdown.Item>
                <Dropdown.Item href="#/action-3">2020</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={ButtonGroup}>
              <Button variant="success">Exhibitions</Button>
              <Dropdown.Toggle
                // split
                // variant="success"
                id="dropdown-split-basic"
              />
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2">2022</Dropdown.Item>
                <Dropdown.Item href="#/action-3">2021</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <Nav.Link>About</Nav.Link> */}
            <Link className="linkNav" to={``}>About</Link>

            {/* <Nav.Link>Contact</Nav.Link> */}
            <Link className="linkNav" to={``}>Contact</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
