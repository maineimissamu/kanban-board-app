import React, { useState } from 'react';

function CreateTaskPage() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('To do');
  const [notification, setNotification] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now().toString(),
      title: taskTitle,
      description: taskDescription,
      status: taskStatus,
      createdAt: new Date().toISOString(),
    };

    const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = [...existingTasks, newTask];

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    setNotification('Task created successfully');
    resetForm();
  };

  const resetForm = () => {
    setTaskTitle('');
    setTaskDescription('');
    setTaskStatus('To do');
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <div className="container-fluid py-4">
      <h1 className="mb-4">Create New Task</h1>

      {notification && (
    <div className="alert alert-success alert-dismissible fade show" role="alert">
          {notification}
          <button
    type="button"
    className="btn-close"
    onClick={() => setNotification('')}
    aria-label="Close"
    ></button>
        </div>
    )}

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="taskTitle" className="form-label">Title</label>
              <input
    type="text"
    className="form-control"
    id="taskTitle"
    value={taskTitle}
    onChange={(e) => setTaskTitle(e.target.value)}
    required
    />
            </div>

            <div className="mb-3">
              <label htmlFor="taskDescription" className="form-label">Description</label>
              <textarea
    className="form-control"
    id="taskDescription"
    rows="3"
    value={taskDescription}
    onChange={(e) => setTaskDescription(e.target.value)}
    required
    ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="taskStatus" className="form-label">Status</label>
              <select
    className="form-select"
    id="taskStatus"
    value={taskStatus}
    onChange={(e) => setTaskStatus(e.target.value)}
    >
                <option value="to do">To do</option>
                <option value="in progress">In progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              <i className="bi bi-plus-circle me-2"></i>
              Create Task
            </button>
          </form>
        </div>
      </div>
    </div>
    );
}

export default CreateTaskPage;

