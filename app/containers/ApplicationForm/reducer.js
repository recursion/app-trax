/*
 * ApplicationManagerReducer
 *
 */

import { fromJS } from 'immutable';
import { SUBMIT_NEW, SUBMIT_EDIT, CHANGE_FIELD } from './constants';

// The initial state of the App
const initialState = fromJS({
  company: '',
  contact: '',
  createdAt: 0,
  state: [],
  id: 0
});

function applicationFormReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_NEW:
      return state
        .set('company', action.application.company)
        .set('contact', action.application.contact)
        .set('createdAt', action.application.createdAt)
        .set('state', action.application.state);

    case SUBMIT_EDIT:
      return state
        .set('company', action.application.company)
        .set('contact', action.application.contact)
        .set('createdAt', action.application.createdAt)
        .set('state', action.application.state)
        .set('id', action.application.id);

    case CHANGE_FIELD:
      return state
        .set(action.fieldName, action.nextValue);

    default:
      return state;
  }
}

export default applicationFormReducer;

