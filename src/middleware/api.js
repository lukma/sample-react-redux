const BASE_URL = 'https://cors-anywhere.herokuapp.com/';

function callApi(endpoint, authenticated) {

    let token = localStorage.getItem('access_token') || null;
    let config = {};

    if(authenticated) {
        if(token) {
            config = {
                headers: { 'Authorization': `Bearer ${token}` }
            }
        }
        else {
            throw new Error("No token saved!");
        }
    }

    return fetch(BASE_URL + endpoint, config)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                // If there was a problem, we want to
                // dispatch the error condition
                return Promise.reject(response.json().error_message)
            }
        }).then(response =>  {
            return response.articles;
        }).catch(err => console.log("Error: ", err))
}

export const CALL_API = Symbol('Call API');

export default store => next => action => {

    const callAPI = action[CALL_API];

    // So the middleware doesn't get applied to every single action
    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    let {endpoint, types, authenticated} = callAPI;

    const [requestType, successType, errorType] = types;

    // Passing the authenticated boolean back in our data will let us distinguish between normal and secret collections
    return callApi(endpoint, authenticated).then(
        response =>
            next({
                response,
                authenticated,
                type: successType
            }),
        error => next({
            error: error.message || 'There was an error.',
            type: errorType
        })
    )
}