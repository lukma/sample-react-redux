import { Dispatch } from 'react-redux';
import { StoreState } from './';
import { UserItemData } from '../constants';
import { FetchUsersAction } from '../actions/User';

export interface FetchUsersStoreState extends StoreState {
    data: UserItemData[];
    error: Error;
    dispatch: Dispatch<FetchUsersAction>;
}