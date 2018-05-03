import React from 'react';
import {Router, IndexRoute, Route, Link} from 'react-router';
import App from 'App';

import MainView from 'views/MainView';

import ReactRouter from 'react-router';

export default class Routing extends React.Component {
  render() {
    /*
          <Route path="event/:id" component={EventView} />
          <Route path="event/:id/edit" component={EditEventView} />
          <Route path="login" component={LoginView} />
          */
    return (
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={MainView} />
        </Route>
      </Router>
    );
  }
};