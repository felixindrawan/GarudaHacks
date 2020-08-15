import React, { useState } from 'react';
import { TextField, IconButton, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import ToDoListTitle from '../../graphics/ToDo_text.png';
import './styles.css';

const Pomodoro = () => {
  const [tasks, setTasks] = useState([]);
  const [currTask, setCurrTask] = useState('');
  const [taskId, setTaskId] = useState(0);

  const handleChange = (event) => {
    setCurrTask(event.target.value);
  };

  const handleSubmit = (event) => {
    if (currTask !== '' && event.key === 'Enter') {
      setTasks((prevTasks) => {
        return [...prevTasks, { id: taskId, task: currTask }];
      });
      setCurrTask('');
      setTaskId(taskId + 1);
    }
  };

  const addTask = () => {
    if (currTask !== '') {
      setTasks((prevTasks) => {
        return [...prevTasks, { id: taskId, task: currTask }];
      });
      setCurrTask('');
      setTaskId(taskId + 1);
    }
  };

  const deleteTask = (key) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((taskItem, taskKey) => {
        return taskKey !== key;
      });
    });
  };

  return (
    <Grid container justify="center" alignItems="center">
      <div className="container">
        <img className="title" src={ToDoListTitle} alt="To-Do List" />

        <div className="inputToDo">
          <TextField
            className="toDoListInput"
            variant="outlined"
            label="Task"
            value={currTask}
            margin="dense"
            onChange={handleChange}
            onKeyUp={handleSubmit}
          />
          <div className="addButton">
            <IconButton size="small" onClick={addTask}>
              <AddIcon className="addIcon" />
            </IconButton>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Pomodoro;
