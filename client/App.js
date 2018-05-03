import React from 'react';
require('style/app.styl');

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
