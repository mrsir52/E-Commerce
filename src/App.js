import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/docs/css/mdb.min.css';


import Routes from './00-Routes';


class App extends Component {
  render() {
    return (
      <div>
          <Routes />

      </div>
    );
  }
}

export default App;
