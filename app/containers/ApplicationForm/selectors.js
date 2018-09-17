/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectApplicationForm = (state) => state.get('applicationForm');

const makeSelectCompany = () => createSelector(
  selectApplicationForm,
  (s) => s.get('company')
);

const makeSelectContact = () => createSelector(
  selectApplicationForm,
  (s) => s.get('contact')
);

const makeSelectCreatedAt = () => createSelector(
  selectApplicationForm,
  (s) => s.get('createdAt')
);

const makeSelectState = () => createSelector(
  selectApplicationForm,
  (s) => s.get('state')
);

const makeSelectId = () => createSelector(
  selectApplicationForm,
  (s) => s.get('id')
);

export {
  selectApplicationForm,
  makeSelectCompany,
  makeSelectContact,
  makeSelectCreatedAt,
  makeSelectId,
  makeSelectState
};
