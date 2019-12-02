import { combineReducers } from 'redux';
import ReducerUser from '../../views/user/redux/reducer-user';

const ReducerStore = combineReducers({
    ReducerStoreUser: ReducerUser
});

export default ReducerStore;