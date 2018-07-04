export const authUserSuccess = payload => ({
  type: authUserSuccess,
  payload
});

export const authUserFailure = payload => ({
  type: authUserFailure,
  payload
});

export const loginUsers = (name) => dispatch =>  {
    localStorage.setItem("username", name)
    if(localStorage.getItem(name)!==''){
      const user =name 
        return dispatch(authUserSuccess(name)); 
     }
    else{
      return dispatch(authUserFailure('err'));
    };
}
