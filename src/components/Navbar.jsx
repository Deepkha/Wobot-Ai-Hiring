// components/Navbar.js

import React from 'react';
import Home from '../components/Home';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="bg-dark text-white">
      <ul>
        <li><Link to="/" element={<Home />}>Home</Link></li>
      </ul>
    </nav>
    
    

  );
}

export default Navbar;
