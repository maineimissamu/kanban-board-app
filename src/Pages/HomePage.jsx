import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import mocktasks from '../dataset/kanban.json';

function HomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    if (savedTasks.length === 0) {
      localStorage.setItem('tasks', JSON.stringify(mocktasks));
      setTasks(mocktasks);
    } else {
      setTasks(savedTasks);
    }
  }, []);

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleDropTask = (taskId, newStatus) => {
    const task = tasks.find(t => t.id === taskId);

    if (task && task.status !== newStatus) {
      const updatedTask = {
        ...task,
        status: newStatus
      };

      const updatedTasks = tasks.map(t => t.id === taskId ? updatedTask : t);

      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row text-center">
        <TaskList
    title="To Do"
    tasks={tasks}
    status="To Do"
    headerColor="bg-danger"
    textColor="text-white"
    onDeleteTask={handleDeleteTask}
    onDropTask={handleDropTask}
    />
        
        <TaskList
    title="In Progress"
    tasks={tasks}
    status="In Progress"
    headerColor="bg-warning"
    textColor="text-dark"
    onDeleteTask={handleDeleteTask}
    onDropTask={handleDropTask}
    />
        
        <TaskList
    title="Done"
    tasks={tasks}
    status="Done"
    headerColor="bg-success"
    textColor="text-white"
    onDeleteTask={handleDeleteTask}
    onDropTask={handleDropTask}
    />
      </div>
    </div>
  );
}

export default HomePage;
