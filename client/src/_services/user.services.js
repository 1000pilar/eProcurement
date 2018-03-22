import { authHeaders } from '../_helpers';
import { url } from from '../_helpers'
import axios from 'axios';

export const userServices = {
  login,
  register,
  logout,
  getAll,
  getById,
  update,
  delete : _delete
}

function login(username, password) {
  axios.post(url.USER + '/login', {username: username, password: password})
  .then(response => {
    if (response.msg) {
      return Promise.reject(response.msg)
    }
    return response.json();
  })
  .then( user =>{
    if (user && user.token) {
      localStorage.setItem('user', JSON.stringify(user.data))
      localStorage.setItem('token', JSON.stringify(user.token))
    }
    return user;
  });
}


function register(user) {
  axios.post(url.USER + '/signUp', )
}

function logout() {
  localStorage.remove('user')
  localStorage.remove('token')
}

function getAll() {

}

function getById(id) {

}

function update(user) {

}

function _delete(id) {

}
