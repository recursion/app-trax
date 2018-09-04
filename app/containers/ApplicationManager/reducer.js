/*
 * ApplicationManagerReducer
 *
 */

import { fromJS } from 'immutable';

import { TOGGLE_NEW_APPLICATION_INPUT } from './constants';

// The initial state of the App
const initialState = fromJS({
  showNewApplicationInput: false
});

function applicationManagerReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NEW_APPLICATION_INPUT:
      return state
        .set('showNewApplicationInput', !state.showNewApplicationInput);
    default:
      return state;
  }
}

export default applicationManagerReducer;

