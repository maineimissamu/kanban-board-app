import React from 'react';
import { useNavigate } from 'react-router-dom';

function TaskCard({task, onDelete}) {
  const navigate = useNavigate();

  const getPriorityClass = (priority) => {
    if (priority === 'High') {
      return 'bg-danger';
    } else if (priority === 'Medium') {
      return 'bg-warning';
    } else {
      return 'bg-success';
    }
  };

  const handleCardClick = () => {
    navigate(`/task/${task.id}`);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(task.id);
  };

  const handleDragStart = (e) => {
    e.stopPropagation();
    e.dataTransfer.setData('taskId', task.id);
  };

  return (
    <div
    className="card mb-2 cursor-pointer"
    onClick={handleCardClick}
    style={{
      cursor: 'pointer'
    }}
    draggable="true"
    onDragStart={handleDragStart}
    >
      <div className="card-body text-start">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">{task.title}</h5>
          <span
    className={`d-inline-block rounded-circle ${getPriorityClass(task.priority)}`}
    style={{
      width: '10px',
      height: '10px'
    }}
    ></span>
        </div>
        {task.dueDate && <p className="mb-2 small">{task.dueDate}</p>}
        <p className="card-text">{task.description}</p>
        <div className="d-flex justify-content-end">
          <button
    className="btn btn-sm btn-outline-danger"
    onClick={handleDeleteClick}
    >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
    );
}

export default TaskCard;