/*
 * ApplicationManagerReducer
 *
 */

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  showNewApplicationInput: false
});

function applicationManagerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default applicationManagerReducer;

