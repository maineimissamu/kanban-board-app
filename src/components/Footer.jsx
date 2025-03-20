import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col">
            <a
    href="https://github.com/maineimissamu/kanban-board-app"
    className="text-decoration-none d-inline-flex align-items-center text-light"
    target="_blank"
    >
              <i className="bi bi-github me-2 fs-5" />
              <span>GitHub repository</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
    );
}

export default Footer;
