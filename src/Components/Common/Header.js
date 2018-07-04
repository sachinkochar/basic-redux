import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  loginUsers
} from '../../actions/auth-actions';

class Header extends Component {

  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this)
  }
  componentDidMount() {
  }

  handleClick(e){
    e.preventDefault();
    console.log('name');
    this.props.loginUsers('sachin');
    console.log(this.props)
  }
  render() {

    return (
      <div className="App">
        <ul>
          <li>Home</li>
          <li>Contact Form</li>
          <li onClick={this.handleClick}>Sign In</li>
          <li>Admin</li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users:state.users
});

const mapDispatchToProps = {
  loginUsers
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
