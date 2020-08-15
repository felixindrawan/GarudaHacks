import React from 'react';
import PropTypes from 'prop-types';
import { Typography, IconButton } from '@material-ui/core/';

import InactiveDone from '@material-ui/icons/DoneRounded';

import './styles.css';

const ToDoTask = ({ tasks, onClickDelete }) => {
  return (
    <div className="taskContainer">
      <div className="listText">
        <Typography className="typorgraphyText" key={tasks.id} align="left" paragraph>
          {tasks.task}
        </Typography>
      </div>
      <div className="deleteButton">
        <IconButton edge="end" aria-label="delete" size="small" onClick={onClickDelete}>
          <InactiveDone className="checkmarkIcon" />
        </IconButton>
      </div>
    </div>
  );
};

ToDoTask.propTypes = {
  tasks: PropTypes.shape({
    id: PropTypes.number,
    task: PropTypes.string,
  }).isRequired,
  onClickDelete: PropTypes.func,
};

ToDoTask.defaultProps = {
  onClickDelete: () => {},
};

export default ToDoTask;
