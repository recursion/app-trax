/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectApplicationManager = (state) => state.get('applicationForm');

const makeSelectCompany = () => createSelector(
  selectApplicationManager,
  (s) => s.get('company')
);

const makeSelectContact = () => createSelector(
  selectApplicationManager,
  (s) => s.get('contact')
);

const makeSelectCreatedAt = () => createSelector(
  selectApplicationManager,
  (s) => s.get('createdAt')
);

const makeSelectState = () => createSelector(
  selectApplicationManager,
  (s) => s.get('state')
);

const makeSelectId = () => createSelector(
  selectApplicationManager,
  (s) => s.get('id')
);

export {
  selectApplicationManager,
  makeSelectCompany,
  makeSelectContact,
  makeSelectCreatedAt,
  makeSelectId,
  makeSelectState
};
