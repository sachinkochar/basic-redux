import userReducer from './user-reducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
	users:userReducer
});


export default reducers;