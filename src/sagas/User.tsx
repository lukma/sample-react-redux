import { put, call } from 'redux-saga/effects';
import * as actions from '../actions/User';
import { UserApi } from '../api/User';

export function* fetchUsers() {
    yield put(actions.fetchUsersRequest());
    let response = yield call(UserApi.fetchUsers);
    if (response instanceof Array) {
        yield put(actions.fetchUsersSuccess(response));
    } else {
        yield put(actions.fetchUsersFailure(response));
    }
}

export function* watchFetchUsers() {
    while (true) {
        yield call(actions.fetchUsersRequest, fetchUsers);
    }
}