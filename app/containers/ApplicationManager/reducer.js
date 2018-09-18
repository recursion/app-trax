/*
 * ApplicationManagerReducer
 *
 */

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
});

function applicationManagerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default applicationManagerReducer;

