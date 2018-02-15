import { put, call, fork, all } from 'redux-saga/effects';
import * as actions from '../actions/User';
import { UserApi } from '../api/User';

function* fetchUsersData() {
    yield put(actions.fetchUsers());
    let response = yield call(UserApi.fetchUsers);
    if (response instanceof Array) {
        yield put(actions.fetchUsersSuccess(response));
    } else {
        yield put(actions.fetchUsersFailure(response));
    }
}

export function* rootUser() {
    yield all([
        fork(fetchUsersData)
    ]);
}