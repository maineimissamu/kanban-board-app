import React from 'react';
import TaskCard from './TaskCard';

function TaskList({title, tasks, status, headerColor, textColor, onDeleteTask, onDropTask}) {
  const filteredTasks = tasks.filter(task => task.status.toLowerCase().trim() === status.toLowerCase().trim()
  );

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    if (taskId) {
      onDropTask(taskId, status);
    }
  };

  return (
    <div className="col-md-4">
      <div
    className={`card ${headerColor} ${textColor}`}
    onDragOver={handleDragOver}
    onDrop={handleDrop}
    >
        <div className="card-header text-center">
          <h2>{title}</h2>
        </div>
        <div className="card-body" style={{
      minHeight: '200px'
    }}>
          {filteredTasks.length === 0 ? (
      <p className="text-center my-3">No tasks in this column</p>
      ) : (
      filteredTasks.map(task => (
        <TaskCard
        key={task.id}
        task={task}
        onDelete={onDeleteTask}
        />
      ))
      )}
        </div>
      </div>
    </div>
    );
}

export default TaskList;