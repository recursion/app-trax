/**
 * Searches for stories related to the search string and options
 */

import { put, takeLatest, all } from 'redux-saga/effects';
// import request from 'utils/request';

import { LOAD_APPLICATIONS } from './constants';
import { loadApplications } from './actions';


export function* loadApps() {
  const apps = window.localStorage.getItem('applications');
  window.console.log('LOADING APPS-> ', apps);
  window.console.log(JSON.parse(apps));
  yield put(loadApplications(apps));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchAll() {
  // Watches for async actions and calls the approriate handler when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([
    takeLatest(LOAD_APPLICATIONS, loadApps),
  ]);
}
