import * as React from 'react';
import { Dispatch } from 'react-redux';
import { UserItemData } from '../constants';
import { FetchUsersAction } from '../actions/User';
import UserItem from './UserItem';

export interface Props {
    data: UserItemData[];
    error: Error;
    dispatch: Dispatch<FetchUsersAction>;
}

function UserList({ data, error, dispatch }: Props) {
    return (
        <div>
            <ul>
                {data != null ? data.map(item =>
                    <UserItem key={item.id} item={item} />
                ) : error == null ? <a>No data</a> : <a>{error}</a>}
            </ul>
        </div>
    );
}

export default UserList;