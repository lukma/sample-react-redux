import { UserItemData } from '../constants';

export interface FetchUsersStoreState {
    fetchUsers: UsersStoreState;
}

export interface UsersStoreState {
    data: UserItemData[];
    error: Error;
}