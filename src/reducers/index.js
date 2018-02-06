import {combineReducers} from 'redux'
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
} from '../actions/login'
import {
    LOGOUT_SUCCESS
} from '../actions/logout'
import {
    USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE
} from '../actions/user'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function auth(state = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('access_token')
}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false
            });
        default:
            return state
    }
}

// The users reducer
function users(state = {
    isFetching: false,
    users: [],
    authenticated: false
}, action) {
    switch (action.type) {
        case USERS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case USERS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                users: action.response,
                authenticated: action.authenticated || false
            });
        case USERS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state
    }
}


// We combine the reducers here so that they can be left split apart above
const usersApp = combineReducers({
    auth,
    users
});

export default usersApp