import React from 'react';

function About() {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center text-primary">About This Project</h1>

      <div className="mb-4 text-center">
        <p className="lead">
          This is a simple Kanban Board application created using <strong>React</strong>. For styling, we used <strong>Bootstrap</strong>.
        </p>
      </div>

      <div className="row justify-content-center">
        {/* Samuel */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Samuel Chadwick</h5>
              <a
                href="https://github.com/maineimissamu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark btn-sm m-1">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/samuel-chadwick-723759286/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm m-1">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Yarin */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Yarin Leib</h5>
              <a
                href="https://github.com/YarinLeib"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark btn-sm m-1">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yarin-leib-34ab982b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm m-1">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
