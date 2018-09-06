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

// load applications state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('applications');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// The initial state of the App
const initialState = fromJS({
  applications: loadState() || []
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_APPLICATION:
      return state
        .set('applications', state.get('applications')
          .push(Object.assign({}, { createdAt: Date.now() }, action.application)));
    default:
      return state;
  }
}

export default appReducer;
