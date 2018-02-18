import { connect } from 'react-redux';
import { FetchUsersStoreState } from '../stores/User';
import UserList from '../components/UserList';

export function mapStateToProps(state: FetchUsersStoreState) {
    return {
        data: state.fetchUsers.data,
        error: state.fetchUsers.error
    };
}

export default connect(mapStateToProps)(UserList);