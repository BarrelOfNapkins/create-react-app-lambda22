// src/Title.js
import './Title.css';
import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const handleItemClick = (item) => {
  // Handle click logic here
  console.log(`Clicked ${item}`);
};

function Title() {
  return (  
    <NavMenu>
      <NavLink to='/test1' activeStyle>
        test1
      </NavLink>
      <NavLink to='/test2' activeStyle>
        test2
      </NavLink>
    </NavMenu>
  )
}

export default Title