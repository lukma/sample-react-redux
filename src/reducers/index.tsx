import { combineReducers } from 'redux';
import { fetchUsers } from './User';

const rootReducer = combineReducers({
    fetchUsers
});

export default rootReducer;