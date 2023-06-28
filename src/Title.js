// src/Title.js
import './Title.css';
import React from 'react'

const handleItemClick = (item) => {
  // Handle click logic here
  console.log(`Clicked ${item}`);
};

function Title() {
  return (
    <div>
      <nav>
        <ul>
          <li>
          <button onClick={() => handleItemClick('Home')}>Home</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Title