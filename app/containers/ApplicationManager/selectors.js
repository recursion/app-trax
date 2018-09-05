/**
 * The global state selectors
 */

// import { createSelector } from 'reselect';

const selectApplicationManager = (state) => state.get('applicationManager');

export { selectApplicationManager };
