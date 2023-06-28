// src/Title.js
import './Title.css';
import React from 'react'
import {
  Nav,
  NavLink,
  NavMenu,
  Bars,
} from './NavbarElements';

function Title() {
  return (  
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Title