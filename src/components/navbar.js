import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dropdown">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
          <Link to="/houses">Houses</Link>
        </li>
        <li>
          <Link to="/reserve-house">Reserve</Link>
        </li>
        {Cookies.get('token') && (
        <li>
          <Link to="/add-house">Add House</Link>
        </li>
        )}
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <div className="menu-footer">
          <div className="icons">
            <img className="logo" src="https://cdn-icons-png.flaticon.com/128/733/733635.png" alt="logo" />
            <img className="logo" src="https://cdn-icons-png.flaticon.com/128/20/20837.png" alt="logo" />
            <img className="logo" src="https://cdn-icons-png.flaticon.com/128/59/59490.png" alt="logo" />
            <img className="logo" src="https://cdn-icons-png.flaticon.com/128/4926/4926536.png" alt="logo" />
            <img className="logo" src="https://cdn-icons-png.flaticon.com/128/152/152817.png" alt="logo" />
          </div>
          <p className="copy">Copyright © 2023</p>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
