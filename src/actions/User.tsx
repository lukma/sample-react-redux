import * as constants from '../constants';

export interface FetchUsersRequest {
    type: constants.FETCH_USERS_REQUEST;
}

export interface FetchUsersSuccess {
    type: constants.FETCH_USERS_SUCCESS;
    data: constants.UserItemData[];
}

export interface FetchUsersFailure {
    type: constants.FETCH_USERS_FAILURE;
    error: Error;
}

export type FetchUsersAction = FetchUsersRequest | FetchUsersSuccess | FetchUsersFailure;

export function fetchUsersRequest(): FetchUsersRequest {
    return {
        type: constants.FETCH_USERS_REQUEST
    };
}

export function fetchUsersSuccess(data: constants.UserItemData[]): FetchUsersSuccess {
    return {
        type: constants.FETCH_USERS_SUCCESS,
        data: data
    };
}

export function fetchUsersFailure(error: Error): FetchUsersFailure {
    return {
        type: constants.FETCH_USERS_FAILURE,
        error: error
    };
}