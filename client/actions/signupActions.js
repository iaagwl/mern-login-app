import { } from './constants'
import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/users', userData);
  }
}

export function doesUserExist(identifier) {
  console.log('xd does user even lift');
  return dispatch => {
    return axios.get(`/api/users/${identifier}`);
  }
}
