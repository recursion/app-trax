import { CHANGE_FIELD, SUBMIT_NEW, SUBMIT_EDIT } from './constants';
import { updateCurrent } from '../../status.utils';

/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
export function submitNew(data) {
  const application = {
    company: data.company,
    contact: data.contact,
    createdAt: data.createdAt,
    state: [
      {
        notes: data.notes,
        status: data.status,
        updated: data.createdAt
      }
    ]
  };
  return {
    type: SUBMIT_NEW,
    application
  };
}

export function submitEdit(prev, next) {
  const nextState = updateCurrent(prev.state, {
    notes: next.notes,
    status: next.status,
    updated: next.createdAt
  });

  const application = Object.assign(prev, {
    company: next.company,
    contact: next.contact,
    createdAt: next.createdAt,
    state: nextState
  });
  return {
    type: SUBMIT_EDIT,
    application
  };
}

export function changeField(fieldName, nextValue) {
  return {
    type: CHANGE_FIELD,
    fieldName,
    nextValue
  };
}
