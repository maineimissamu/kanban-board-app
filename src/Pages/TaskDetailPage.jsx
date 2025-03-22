import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TaskDetailPage() {
  const {id} = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState(null);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [taskAssignee, setTaskAssignee] = useState('');
  const [taskPriority, setTaskPriority] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const foundTask = tasks.find(task => task.id === id);

    if (foundTask) {
      setTask(foundTask);
      setTaskTitle(foundTask.title);
      setTaskDescription(foundTask.description);
      setTaskStatus(foundTask.status);
      setTaskAssignee(foundTask.assignee || '');
      setTaskPriority(foundTask.priority);
      setTaskDueDate(foundTask.dueDate || '');
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedTask = {
      ...task,
      title: taskTitle,
      description: taskDescription,
      assignee: taskAssignee,
      status: taskStatus,
      priority: taskPriority,
      dueDate: taskDueDate,
    };

    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = tasks.map(t => t.id === id ? updatedTask : t);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setNotification('Task updated successfully');

    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const handleDelete = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = tasks.filter(t => t.id !== id);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    navigate('/');
  };

  if (!task) {
    return <div className="container mt-5"><p>Loading...</p></div>;
  }

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Edit Task</h1>
        <button
    onClick={() => navigate('/')}
    className="btn btn-outline-secondary"
    >
          Back to Board
        </button>
      </div>

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

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="taskAssignee" className="form-label">Assignee</label>
                <input
    type="text"
    className="form-control"
    id="taskAssignee"
    value={taskAssignee}
    onChange={(e) => setTaskAssignee(e.target.value)}
    required
    />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="taskStatus" className="form-label">Status</label>
                <select
    className="form-select"
    id="taskStatus"
    value={taskStatus}
    onChange={(e) => setTaskStatus(e.target.value)}
    >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="taskPriority" className="form-label">Priority</label>
                <select
    className="form-select"
    id="taskPriority"
    value={taskPriority}
    onChange={(e) => setTaskPriority(e.target.value)}
    >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="taskDueDate" className="form-label">Due Date</label>
                <input
    type="date"
    className="form-control"
    id="taskDueDate"
    value={taskDueDate}
    onChange={(e) => setTaskDueDate(e.target.value)}
    />
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <button
    type="button"
    className="btn btn-danger"
    onClick={handleDelete}
    >
                <i className="bi bi-trash me-2"></i>
                Delete Task
              </button>
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-save me-2"></i>
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
}

export default TaskDetailPage;