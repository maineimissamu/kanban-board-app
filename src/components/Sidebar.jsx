import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar bg-light p-3 h-100">
      <div className="d-flex flex-column">
        <h5 className="mb-4 text-primary fw-bold">Menu</h5>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item mb-2">
            <Link to="/" className={`nav-link d-flex align-items-center ${location.pathname === '/' ? 'active' : ''}`}>
              <i className="bi bi-kanban me-2"></i>
              KanBan Board
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="/create"
              className={`nav-link d-flex align-items-center ${location.pathname === '/create' ? 'active' : ''}`}>
              <i className="bi bi-plus-circle me-2"></i>
              Create Task
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="/about"
              className={`nav-link d-flex align-items-center ${location.pathname === '/about' ? 'active' : ''}`}>
              <i className="bi bi-plus-circle me-2"></i>
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
