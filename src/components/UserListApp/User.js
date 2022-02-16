import { Component, useState } from 'react/cjs/react.development';
import classes from './User.module.css';

class User extends Component {
  constructor() {
    super();
  }

  componentWillUnmount(){
    console.log('User will unmount');
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
