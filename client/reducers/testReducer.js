import { ADD_TEST_STATE } from '../actions/constants';

const initialState = {
  test: ''
}

export default (state = initialState, action = {}) => {
  switch(action.type){
    case ADD_TEST_STATE:
      return {
        ...state,
        test: action.test
      }

    default: return state;
  }
}
