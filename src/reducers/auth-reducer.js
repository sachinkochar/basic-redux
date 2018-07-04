import { 
	authUserSuccess,
    authUserFailure
  } from '../actions/auth-actions';

const initialState = {
	 users:'',
	 fetched:false,
	 error:''
}
export default function authReducer(state = initialState, {type,payload}) {
	switch(type){
	 case authUserSuccess :
		return {
			...state,
			fetched:true,
			users:payload
		}
	 case authUserFailure :
		return {
			...state,
			fetched:false,
			error:payload
		}
	 default :
	    return state;
    }
}