import {CALL_API} from '../middleware/api';

export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';

export function fetchUsers() {
    return {
        [CALL_API]: {
            endpoint: 'https://www.healthcare.gov/api/articles.json',
            authenticated: true,
            types: [USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE]
        }
    }
}