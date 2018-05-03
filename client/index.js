import React from 'react';
import ReactDOM from 'react-dom';

//import Routing from 'config/routing';
//ReactDOM.render(<Routing />, document.getElementById('application'));

// Router not needed at the moment, so let's skip it entirely
import App from 'App';
import MainView from 'views/MainView';
ReactDOM.render(<App><MainView /></App>, document.getElementById('application'));
