import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Menu from './pages/Menu';
import ToDoList from './pages/ToDoList';
import Pomodoro from './pages/Pomodoro';

// eslint-disable-next-line import/extensions
import * as serviceWorker from './serviceWorker';
import 'fontsource-roboto';

ReactDOM.render(
  <React.StrictMode>
    <Menu />

    <Router>
      <Switch>
        <Route exact path="/" component={ToDoList} />
        <Route path="/ToDoList" component={ToDoList} />
        <Route path="/Pomodoro" component={Pomodoro} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
