import React, { useState } from 'react';
import mocktasks from '../dataset/kanban.json';

function HomePage() {
  const [tasks] = useState(mocktasks);
  function filterPriority(priority) {
    if (priority === 'High') {
      return 'bg-danger';
    } else if (priority === 'Medium') {
      return 'bg-warning';
    } else {
      return 'bg-success';
    }
  }

  function handleHover(e) {
    e.target.style.display = 'block';
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row text-center">
        <div className="col-md-4">
          <div className="card bg-danger text-white">
            <div className="card-header">
              <h2>To Do</h2>
            </div>
            <div className="card-body">
              {tasks
                .filter((task) => task.status === 'To Do')
                .map((task, index) => (
                  <div key={index} className="card mb-2">
                    <span
                      class={` d-inline-block rounded-circle ${filterPriority(task.priority)}`}
                      style={{ width: '10px', height: '10px' }}></span>
                    <p> {task.dueDate} </p>
                    <div className="card-body">
                      <h5 className="card-title">{task.title}</h5>
                      <p className="card-text">{task.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-warning text-dark">
            <div className="card-header">
              <h2>In Progress</h2>
            </div>
            <div className="card-body"></div>
            {tasks
              .filter((task) => task.status === 'In Progress')
              .map((task, index) => (
                <div key={index} className="card mb-2">
                  <span
                    className={` d-inline-block rounded-circle ${filterPriority(task.priority)}`}
                    style={{ width: '10px', height: '10px' }}></span>
                  <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success text-white">
            <div className="card-header">
              <h2>Done</h2>
            </div>
            <div className="card-body"></div>
            {tasks
              .filter((task) => task.status === 'Done')
              .map((task, index) => (
                <div key={index} className="card mb-2">
                  <span
                    class={` d-inline-block rounded-circle ${filterPriority(task.priority)}`}
                    style={{ width: '10px', height: '10px' }}></span>
                  <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
