// src/Title.js
import './Title.css';
import React from 'react'
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';

function Title() {
  return (  
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/test1' activeStyle>
            test1
          </NavLink>
          <NavLink to='/test2' activeStyle>
            test2
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Title