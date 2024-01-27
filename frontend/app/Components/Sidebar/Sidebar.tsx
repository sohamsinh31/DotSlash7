// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css'; // Make sure the path to your CSS file is correct

export const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sidebar">
      <h2>Introduction to C</h2>
      <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <button className="dropbtn" onClick={toggleDropdown}>
          <h3>Chapter 1</h3> <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  );
};
