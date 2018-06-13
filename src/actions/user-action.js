import axios from 'axios';

export const getUserSuccess = payload => ({
  type: getUserSuccess,
  payload
});

export const getUserFailure = payload => ({
  type: getUserFailure,
  payload
});

export const getUsers = () => dispatch =>  {
    axios.get('http://18.195.238.14:3000/api/users')
    .then(res => {
      const { users } = res.data;
      if (res.status === 200) {
        return dispatch(getUserSuccess(users));
       } 
     })
    .catch(err => {
      return dispatch(getUserFailure(err));
    });
}
