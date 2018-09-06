/*
 * ApplicationManagerReducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_APPLICATIONS, LOAD_APPLICATIONS_SUCCESS } from './constants';

// The initial state of the App
const initialState = fromJS({
  showNewApplicationInput: false,
  loading: false
});

function applicationManagerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_APPLICATIONS:
      return state
        .set('loading', true);
    case LOAD_APPLICATIONS_SUCCESS:
      return state
        .set('applications', fromJS(action.applications))
        .set('loading', false);
    default:
      return state;
  }
}

export default applicationManagerReducer;

