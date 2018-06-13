import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {
  getUsers
} from './actions/user-action';

class App extends Component {

  componentDidMount() {
      this.props.getUsers()
  }
  render() {

      var user = this.props.users.users.map((user,i) => {
           return (
              <li key={i}>{user.email}</li>
            );
      });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
         </header>
          <ul>
            {user}
          </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users:state.users
});

const mapDispatchToProps = {
  getUsers
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
