export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export type FETCH_USERS_REQUEST = typeof FETCH_USERS_REQUEST;

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export type FETCH_USERS_SUCCESS = typeof FETCH_USERS_SUCCESS;

export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export type FETCH_USERS_FAILURE = typeof FETCH_USERS_FAILURE;

export class UserItemData {
    id: string;
    email: string;
}