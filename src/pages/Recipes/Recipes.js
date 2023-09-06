import React from 'react';
import Entrees from './components/Entrees';
import Popular from './components/Popular';
import Veggie from './components/Veggie';

  function Recipes() {
  return (
    <div>
      <Veggie />
      <Popular />
    </div>
  );
  }

export default Recipes;