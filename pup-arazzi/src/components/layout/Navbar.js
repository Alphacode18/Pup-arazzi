import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className='navbar bg-success'>
      <h1>Pup-arazzi</h1>
      <ul>
        <li>
          <Link to='/about' />
          About
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
