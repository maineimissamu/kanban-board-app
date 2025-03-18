import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar bg-light p-3 h-100">
      <div className="d-flex flex-column">
        <h5 className="mb-4 text-primary fw-bold">Menu</h5>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link active d-flex align-items-center">
              <i className="bi bi-kanban me-2"></i>
              KanBan Board
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link d-flex align-items-center">
              <i className="bi bi-plus-circle me-2"></i>
              Create Task
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar