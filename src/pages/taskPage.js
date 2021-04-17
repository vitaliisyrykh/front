import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Task = props => {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Task;
