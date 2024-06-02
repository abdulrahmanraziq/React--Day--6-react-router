import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

function NavbarFilter() {
  return <>
  <Navbar expand="lg" className="bg-body-tertiary background-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  w-100 justify-content-center">
          <NavLink 
              to="/all" 
              className={({ isActive }) => isActive ? 'text-uppercase fw-bold custom-text active' : 'text-uppercase fw-bold custom-text'}
            >
              All
            </NavLink>
            <NavLink 
              to="/fullStackDevelopment" 
              className={({ isActive }) => isActive ? 'text-uppercase fw-bold custom-text active' : 'text-uppercase fw-bold custom-text'}
            >
              Full Stack Development
            </NavLink>
            <NavLink 
              to="/dataScience" 
              className={({ isActive }) => isActive ? 'text-uppercase fw-bold custom-text active' : 'text-uppercase fw-bold custom-text'}
            >
              Data Science
            </NavLink>
            <NavLink 
              to="/cyberSecurity" 
              className={({ isActive }) => isActive ? 'text-uppercase fw-bold custom-text active' : 'text-uppercase fw-bold custom-text'}
            >
              Cyber Security
            </NavLink>
            <NavLink 
              to="/carrer" 
              className={({ isActive }) => isActive ? 'text-uppercase fw-bold custom-text active' : 'text-uppercase fw-bold custom-text'}
            >
              Career
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default NavbarFilter
