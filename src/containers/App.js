import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/user'
import Navbar from '../components/Navbar'
import Users from '../components/Users'
import PropTypes from 'prop-types'

class App extends Component {
    render() {
        const {dispatch, users, isAuthenticated, errorMessage} = this.props

        if (isAuthenticated){
            dispatch(fetchUsers());
        }

        return (
            <div>
                <Navbar
                    isAuthenticated={isAuthenticated}
                    errorMessage={errorMessage}
                    dispatch={dispatch}
                />
                <div className='container'>
                    <Users
                        isAuthenticated={isAuthenticated}
                        users={users}
                    />
                </div>
            </div>
        )
    } 
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    users: PropTypes.array,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
};

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

    const {users, auth} = state;
    const {isAuthenticated, errorMessage} = auth;

    return {
        users,
        isAuthenticated,
        errorMessage
    }
}

export default connect(mapStateToProps)(App)