import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dropdown">
      <button type="button" className={`dropbtn ${isOpen ? 'active' : ''}`} onClick={toggleDropdown}>
        <span className={`dropbtn__icon1 ${isOpen ? 'active' : ''}`} />
        <span className={`dropbtn__icon2 ${isOpen ? 'active' : ''}`} />
      </button>
      <ul className={`list ${isOpen ? 'active' : ''}`}>
        <li>
          <img className="logo" src="https://www.freepnglogos.com/uploads/logo-home-png/vector-brush-home-logo-download-vector-logos-6.png" alt="logo" />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/houses">houses</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/add-house">Add House</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
