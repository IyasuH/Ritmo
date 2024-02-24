import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CreateArtistPopupForm from "./newArtistPopupFrom";

import { Outlet } from "react-router-dom";

const NavBarComponent: React.FC =()=> {
  const [showNewArtistPopup, setShowNewArtistPopup] = useState(false);

  const handleShowNewArtistPopup = () => setShowNewArtistPopup(true);
  const handleCloseNewArtistPopup = () => setShowNewArtistPopup(false);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Ritmo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              {/* <NavDropdown> */}
              <Button onClick={handleShowNewArtistPopup}>New Artist</Button>
              <CreateArtistPopupForm show={showNewArtistPopup} handleClose={handleCloseNewArtistPopup}/>
              {/* </NavDropdown> */}
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              Account
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default function NavLayout() {
    return (
      <>
        <NavBarComponent/>
        <main>
          <Outlet />
        </main>
      </>
    )
}

// export default NavBarComponent;