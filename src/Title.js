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
      <ul>
        <li>
        <button onClick={() => handleItemClick('Home')}>Home</button>
        </li>
      </ul>
    </NavMenu>
  )
}

export default Title