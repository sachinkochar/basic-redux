import userReducer from './user-reducer';
import authReducer from './auth-reducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
	users:userReducer,
	auth:authReducer
});


export default reducers;