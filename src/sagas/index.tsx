import { fork, all } from 'redux-saga/effects';
import { rootUser } from './User';

export default function* rootSaga() {
    yield all([
        fork(rootUser)
    ]);
}  