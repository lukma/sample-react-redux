import * as React from 'react';
import { UserItemData } from '../constants';

export interface Props {
    item: UserItemData;
}

function UsersItem({ item }: Props) {
    return (
        <li>{item.email}</li>
    );
}

export default UsersItem;