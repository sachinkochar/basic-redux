import { 
	getUserSuccess,
    getUserFailure
  } from '../actions/user-action';

const initialState = {
	 users:[],
	 fetched:false,
	 error:{}
}
export default function userReducer(state = initialState, {type,payload}) {
	switch(type){
	 case getUserSuccess :
		return {
			...state,
			fetched:true,
			users:payload
		}
	 case getUserFailure :
		return {
			...state,
			fetched:false,
			error:payload
		}
	 default :
	    return state;
    }
}