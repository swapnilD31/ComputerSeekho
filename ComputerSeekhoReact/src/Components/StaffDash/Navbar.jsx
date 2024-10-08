import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const location = useLocation();
    const { loggedInUser } = location.state || {};
    const [enquiries, setEnquiries] = useState([]);
    const [error, setError] = useState('');
  return (
    
    <nav className="navbar">
      <h1>Hello, {loggedInUser ? loggedInUser.staff_name : 'Staff'}!</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Login">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
