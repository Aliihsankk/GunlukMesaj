import React from 'react';

  function Navbar({ onPageChange }) {
    return (
      <nav>
        <button onClick={() => onPageChange('register')}>Register</button>
        <button onClick={() => onPageChange('display')}>Display</button>
      </nav>
    );
  }

  export default Navbar;
