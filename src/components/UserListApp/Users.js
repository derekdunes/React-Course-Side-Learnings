import { useState, Component } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {

  constructor() {
    super();
    this.state = {
      showUsers: false
    }
  }

  toggleUsersHandler() {
    //setShowUsers((curState) => !curState);
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  };

  componentDidUpdate() {
    // try {
    //   //code that might fail
    // } catch (err) {
    //   // handle error
    // }

    if (this.props.users.length === 0) {
      throw new Error('No users provided!');
    }
  }

  render () {

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
};

export default Users;