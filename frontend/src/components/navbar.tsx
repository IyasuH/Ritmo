import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";
import { IoMdMore } from "react-icons/io";

import CreateArtistPopupForm from "./Input/newArtistPopupFrom";

import { Link, Outlet } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { NavBar, NavBarComp, NavBarButton } from "./styled_components/nav_bar.style";

const NavBarComponent: React.FC =()=> {
  return (
    <NavBar>
      <a href="/" style={{ textDecoration: 'none', color: 'black' }}><h1>Ritmo</h1></a>
      <NavBarComp>
        <NavBarButton>
          <TfiArrowCircleLeft size={35} onClick={()=>{}}/>
          <TfiArrowCircleRight size={35} onClick={()=>{}}/>
        </NavBarButton>
        <form action="">
          <input type="text" />
          <button type="submit">Search</button>
          <IoMdMore size={35} onClick={()=>{}}/>
        </form>
        {/* <Form className="d-flex">
          <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
        <VscAccount size={35}/>
      </NavBarComp>
    </NavBar>
    // <Navbar expand="lg" className="bg-body-tertiary">
    // </Navbar>
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