import * as React from 'react';
import { Dispatch } from 'react-redux';
import { UserItemData } from '../constants';
import * as actions from '../actions/User';
import UserItem from './UserItem';

export interface Props {
    dispatch: Dispatch<actions.FetchUsersAction>;
    data: UserItemData[];
    error: Error;
}

function UserList(props: Props) {
    return (
        <div>
            <table className="table table-striped table-sm">
                <tbody>
                    {props.data != null ? props.data.map(item =>
                                <UserItem key={item.id} item={item} />
                    ) : props.error == null ? <a>No data</a> : <a>{props.error}</a>}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;