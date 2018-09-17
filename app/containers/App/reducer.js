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
import uuidv4 from 'uuid/v4';

import { DELETE_APPLICATION, ADD_APPLICATION, UPDATE_APPLICATION } from './constants';
import { loadState } from '../../localStorage';

// The initial state of the App
const initialState = fromJS({
  applications: loadState() || []
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_APPLICATION:
      return state
        .set('applications',
          fromJS(state.get('applications').toJS()
            .map((app) => {
              if (app.id === action.application.id) {
                return action.application;
              }
              return app;
            })));
    case ADD_APPLICATION:
      return state
        .set('applications', fromJS(state.get('applications')
          .push({ ...action.application, id: uuidv4() })));
    case DELETE_APPLICATION:
      return state
        .set('applications',
          fromJS(state.get('applications').toJS()
            .filter((app) => app.id !== action.application.id)));
    default:
      return state;
  }
}

export default appReducer;
