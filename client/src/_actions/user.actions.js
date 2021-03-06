import { userConstants } from '../_constants';
import { userServices } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';


export const userActions = {
  login,
  logout,
  register,
  getAll,
  delete: _delete
}


function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    userServices.login(username, password)
    .then(
      user => {
        dispatch(success(user));
        history.push('/');
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
  function request(user){ return { type: userConstants.LOGIN_REQUEST, user} };
  function success(user){ return { type: userConstants.LOGIN_SUCCESS, user} };
  function failure(error){ return { type: userConstants.LOGIN_FAILURE, error} };
}

function logout(){
  userServices.logout();
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userServices.register(user)
    .then(
      user =>{
      dispatch(success());
      history.push('/login');
      dispatch(alertActions.success('Registration Successfull'));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      };
    );
  }
  function request(user){ return { type: userConstants.REGISTER_REQUEST, user} };
  function success(user){ return { type: userConstants.REGISTER_SUCCESS, user} };
  function failure(error){ return { type: userConstants.REGISTER_FAILURE, error} };
};

function getAll(){
  return dispatch => {
    dispatch(request( ));

    userServices.getAll()
    .then(
      user => dispatch(success(user)),
      error => dispatch(failure(error));
    );
  };
  function request(){ return { type:userConstants.GETALL_REQUEST }};
  function success(user) { return { type: userConstants.GETALL, user }};
  function failure(error) { return { type: userConstants.GETALL_FAILURE, error }};
}

function _delete(id) {
  dispatch(request(id));

  userServices.delete(id) {
    .then(
      user => {
        dispatch(success(id));
      },
      error => {
        dispatch(failure(id, error));
      }
    );
  };

  function request(id){ return { type:userConstants.DELETE_REQUEST, id }};
  function success(id){ return { type:userConstants.DELETE_SUCCESS, id }};
  function failure(id, error){ return { type:userConstants.DELETE_FAILURE, id, error }};
}
