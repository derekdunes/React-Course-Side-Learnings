import { Fragment, useState, useEffect, Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import classes from './UserFinder.module.css';

import Users from './Users';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
    constructor() {
        super();

        this.state = {
            filteredUsers: [],
            searchTerm : ''
        }
    }

    componentDidMount() {
        //Send http request...
        this.setState({ filteredUsers: DUMMY_USERS});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm))}
            );
        }
    } 

    searchChangeHandler(event) {
        this.setState(prevState => (
            {searchTerm: event.target.value}))
      };
    
    render() {
        return (
            <Fragment>
                <ErrorBoundary>
                    <div className={classes.finder}>
                        <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                        <Users users={this.state.filteredUsers} />
                    </div>
                </ErrorBoundary>
            </Fragment>
        )
    }
}



// const UserFinder = () => {

//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
      
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//         <div className={classes.finder}>
//             <input type='search' onChange={searchChangeHandler} />
//             <Users users={filteredUsers} />
//       </div>
//     </Fragment>
//   );
// };

export default UserFinder;

