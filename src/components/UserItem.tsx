import * as React from 'react';
import { UserItemData } from '../constants';

export interface Props {
    item: UserItemData;
}

function UsersItem({ item }: Props) {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.email}</td>
        </tr>
    );
}

export default UsersItem;