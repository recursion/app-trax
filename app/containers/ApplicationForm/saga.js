import { put, select, takeLatest, all } from 'redux-saga/effects';
import { addApplication, updateApplication } from 'containers/App/actions';

import {
  makeSelectCompany,
  makeSelectContact,
  makeSelectCreatedAt,
  makeSelectId,
  makeSelectState
} from 'containers/ApplicationForm/selectors';
import { SUBMIT_NEW, SUBMIT_EDIT } from './constants';

export function* submitNew() {
  const company = yield select(makeSelectCompany());
  const contact = yield select(makeSelectContact());
  const createdAt = yield select(makeSelectCreatedAt());
  const state = yield select(makeSelectState());
  yield put(addApplication({
    company,
    contact,
    createdAt,
    state
  }));
}

export function* submitEdit() {
  const company = yield select(makeSelectCompany());
  const contact = yield select(makeSelectContact());
  const createdAt = yield select(makeSelectCreatedAt());
  const state = yield select(makeSelectState());
  const id = yield select(makeSelectId());
  yield put(updateApplication({
    company,
    contact,
    createdAt,
    state,
    id
  }));
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* watchAll() {
  yield all([
    takeLatest(SUBMIT_NEW, submitNew),
    takeLatest(SUBMIT_EDIT, submitEdit)
  ]);
}
