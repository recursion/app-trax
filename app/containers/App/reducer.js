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
import { loadState } from '../../localStorage';

// The initial state of the App
const initialState = fromJS({
  applications: loadState() || []
});

/**
 * updateApplication updates an application record in an array of applications
 *
 * @param {array<application>} applications
 * @param {object<application>} updatedApp
 * @returns {array<applications>}
 */
const updateApplication = (applications, updatedApp) => applications.map((app) => {
  if (app.createdAt === updatedApp.createdAt) {
    return updatedApp;
  }
  return app;
});

/**
 * Returns a new array of applications minus the application matching the application argument
 * @param {array<application>} applications
 * @param {object<application>} application
 * @returns {array<application>}
 */
const deleteApplication = (applications, application) => applications.filter((app) => {
  if (app.createdAt === application.createdAt) {
    return false;
  }
  return true;
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_APPLICATION:
      return state
        .set('applications', fromJS(updateApplication(state.get('applications').toJS(), action.application)));
    case ADD_APPLICATION:
      return state
        .set('applications', fromJS(state.get('applications')
          .push(Object.assign({}, { createdAt: Date.now() }, action.application))));
    case DELETE_APPLICATION:
      return state
        .set('applications', fromJS(deleteApplication(state.get('applications').toJS(), action.application)));
    default:
      return state;
  }
}

export default appReducer;
