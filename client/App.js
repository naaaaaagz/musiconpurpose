import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
require('style/app.styl');

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  getApp(children) {
    return () => (<div>
      {children}
    </div>
  );
  }
  
  render() {
    return (
      <Router>
        <Route path="/" component={this.getApp(this.props.children)} />
      </Router>
    );
  }
}
