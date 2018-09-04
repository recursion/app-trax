/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectApplicationManager = (state) => state.get('applicationManager');

const makeSelectShowNewApplicationInput = () => createSelector(
  selectApplicationManager,
  (appState) => appState.get('showNewApplicationInput')
);

export { selectApplicationManager, makeSelectShowNewApplicationInput };
