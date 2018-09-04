/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import { ADD_APPLICATION } from './constants';

// The initial state of the App
const initialState = fromJS({
  applications: []
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_APPLICATION:
      return state
        .set('applications', state.get('applications').push(action.application));
    default:
      return state;
  }
}

export default appReducer;
