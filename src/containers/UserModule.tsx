import { connect, Dispatch } from 'react-redux';
import { FetchUsersStoreState } from '../stores/User';
import { UserItemData } from '../constants';
import * as actions from '../actions/User';
import UserList from '../components/UserList';

export function mapStateToProps(state: FetchUsersStoreState) {
    return {
        data: state.data,
        error: state.error,
        dispatch: state.dispatch,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.FetchUsersAction>) {
    return {
        fetchUsers: () => dispatch(actions.fetchUsers()),
        fetchUsersSucess: (data: UserItemData[]) => dispatch(actions.fetchUsersSuccess(data)),
        fetchUsersFailure: (error: Error) => dispatch(actions.fetchUsersFailure(error)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);