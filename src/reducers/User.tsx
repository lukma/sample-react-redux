import { UsersStoreState } from '../stores/User';
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../constants';
import { FetchUsersAction } from '../actions/User';

export function fetchUsers(state: UsersStoreState, action: FetchUsersAction): UsersStoreState {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return { ...state };
        case FETCH_USERS_SUCCESS:
            return { ...state, data: action.data };
        case FETCH_USERS_FAILURE:
            return { ...state, error: action.error };
        default:
            return { ...state, data: [] };
    }
}