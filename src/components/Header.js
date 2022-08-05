import React from 'react';
import logo from '../images/Fill.png';

function Header() {
  return (
    <div className='header-container'>
      <img src={logo} className='header-logo' />
      <h1 className='header-title'>my travel journal</h1>
    </div>
  );
}

export default Header;
