import React from 'react';
import logo from '../assets/kanban_board_logo.jpg';
import '../styles/index.css';

function Navbar() {
  return (
    <div>
      <div className="background d-flex align-items-center justify-content-center">
        <h3>TaskTrack</h3>
        <img className="logo" src={logo} alt="logo"></img>
      </div>
    </div>
  );
}

export default Navbar;
