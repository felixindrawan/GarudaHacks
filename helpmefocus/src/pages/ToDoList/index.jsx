import React, { useState } from 'react';
import { Typography, TextField } from '@material-ui/core';

import tasks from './tasks';

const ToDoList = () => {
  const [currTask, setCurrTask] = useState('');
  const [taskId, setTaskId] = useState(0);

  const handleChange = (event) => {
    setCurrTask(event.target.value);
  };

  const handleSubmit = (event) => {
    if (event.target.value !== '' && event.key === 'Enter') {
      tasks.push({ id: taskId, task: currTask });
      setCurrTask('');

      setTaskId(taskId + 1);
    }
  };

  return (
    <div className="container">
      <Typography variant="h4">To-Do List</Typography>

      <TextField
        id="toDoListInput"
        variant="outlined"
        label="Task"
        value={currTask}
        margin="dense"
        onChange={handleChange}
        onKeyPress={handleSubmit}
      />

      {tasks.map((eachTask) => (
        <p>{eachTask.id} {eachTask.task} </p>
      ))}
    </div>
  );
};

export default ToDoList;
