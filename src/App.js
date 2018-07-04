import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {connect} from 'react-redux';
import {
  getUsers
} from './actions/user-action';

class App extends Component {

  componentDidMount() {
      // this.props.getUsers()
  }
  render() {


    return (
      <div className="App">
          <Home />
      </div>
    );
  }
}


export default App;
