import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">Movie Booking</Link>
      <ul className="navbar-links">
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/bookings">Booking History</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
