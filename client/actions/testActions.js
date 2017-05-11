import { ADD_TEST_STATE } from './constants'
import axios from 'axios';

export function testAjaxFunc(userData) {
  return dispatch => {
    return axios.post('/api/test', userData);
  }
}

export function addTestState(teststate) {
  return {
    type: ADD_TEST_STATE,
    test: teststate
  }
}
