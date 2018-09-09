/*
 * ApplicationManagerReducer
 *
 */

import { fromJS } from 'immutable';
import {} from './constants';

// The initial state of the App
const initialState = fromJS({
});

function applicationFormReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default applicationFormReducer;

