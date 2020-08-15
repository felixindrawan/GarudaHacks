import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Typography } from '@material-ui/core';

import SiteLogo from '../../graphics/MiddleBANNER.png';

import './styles.css';

const Menu = () => (
  <div className="menu">
    <Navbar className="navbar-color" sticky="top" variant="light">
      <Nav className="m-auto nav-class">
        <img className="siteLogo" src={SiteLogo} alt="HelpMeFocus" />
        <Nav.Link className="navLinks" href="ToDoList">
          <Typography className="link-text">To-Do List</Typography>
        </Nav.Link>
        <Nav.Link className="navLinks" href="Pomodoro">
          <Typography className="link-text">Pomodoro</Typography>
        </Nav.Link>
      </Nav>
    </Navbar>
  </div>
);

export default Menu;
