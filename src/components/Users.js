import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Users extends Component {

    render() {
        const {isAuthenticated, users} = this.props;

        console.log(users.users);

        const listItems = users.users.map((item) =>
            <li>{item.path}</li>
        );

        return (
            <div>
                {isAuthenticated &&
                <ul>{listItems}</ul>
                }
            </div>
        )
    }
}

Users.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    users: PropTypes.array
};