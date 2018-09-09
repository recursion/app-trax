/**
 * takes an array state and returns the first item in the array
 * @param {array} state
 * @returns {object}
 */
export const getCurrent = (state) => state[0];

/**
 * Replaces the current state with updatedState and returns the entire history
 * @param {array<state>} stateHistory
 * @param {<state>} updatedState
 * @returns {array<state>}
 */
export const updateCurrent = (stateHistory, updatedState) => stateHistory.map((state, i) => {
  if (i === 0) {
    if (Array.isArray(updatedState)) {
      return getCurrent(updatedState);
    }
    return updatedState;
  }
  return state;
});
