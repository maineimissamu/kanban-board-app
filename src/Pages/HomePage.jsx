import React from 'react';

function HomePage() {
  return (
    <div className="container-fluid mt-5">
      <div className="row text-center">
        <div className="col-md-4">
          <div className="card bg-danger text-white">
            <div className="card-header">
              <h2>To Do</h2>
            </div>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-warning text-dark">
            <div className="card-header">
              <h2>In Progress</h2>
            </div>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success text-white">
            <div className="card-header">
              <h2>Done</h2>
            </div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default HomePage;
