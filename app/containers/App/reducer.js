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

import { DELETE_APPLICATION, ADD_APPLICATION, UPDATE_APPLICATION } from './constants';
import { updateApplication, createApplication, deleteApplication } from '../../application.utils';
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
          fromJS(updateApplication(state.get('applications').toJS(),
            action.application))
        );
    case ADD_APPLICATION:
      return state
        .set('applications', fromJS(state.get('applications')
          .push(createApplication(action.application))));

    case DELETE_APPLICATION:
      return state
        .set('applications',
          fromJS(deleteApplication(state.get('applications').toJS(),
            action.application))
        );
    default:
      return state;
  }
}

export default appReducer;
