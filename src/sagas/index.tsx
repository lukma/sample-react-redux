import { fork, all } from 'redux-saga/effects';
import { fetchUsers } from './User';

export default function* rootSaga() {
    yield all([
        fork(fetchUsers)
    ]);
}  