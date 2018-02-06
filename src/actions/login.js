export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token
    }
}

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

// Calls the API to get a token and dispatches actions along the way
export function loginUser(creds) {

    let config = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `email=${creds.username}&password=${creds.password}`
    };

    return dispatch => {
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestLogin(creds));

        return fetch('http://localhost:8080/api/auth/login', config)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    // If there was a problem, we want to
                    // dispatch the error condition
                    dispatch(loginError(response.json().error_message));
                }
            }).then(response =>  {
                // If login was successful, set the token in local storage
                localStorage.setItem('id_token', response.data.id);
                localStorage.setItem('access_token', response.token.access_token);
                // Dispatch the success action
                dispatch(receiveLogin(response.data))
            }).catch(err => console.log("Error: ", err))
    }
}