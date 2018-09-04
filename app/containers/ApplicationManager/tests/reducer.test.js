import { fromJS } from 'immutable';

import applicationManagerReducer from '../reducer';
import { toggleNewApplicationInput } from '../actions';

describe('applicationManagerReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      showNewApplicationInput: false
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(applicationManagerReducer(undefined, {})).toEqual(expectedResult);
  });

  it('toggleNewApplicationInput should invert current state', () => {
    const expectedResult = state
      .set('showNewApplicationInput', !state.showNewApplicationInput);

    expect(applicationManagerReducer(state, toggleNewApplicationInput())).toEqual(expectedResult);
  });
});
/*


  it('should handle the reposLoaded action correctly', () => {
    const fixture = [{
      name: 'My Repo',
    }];
    const username = 'test';
    const expectedResult = state
      .setIn(['userData', 'repositories'], fixture)
      .set('loading', false)
      .set('currentUser', username);

    expect(appReducer(state, reposLoaded(fixture, username))).toEqual(expectedResult);
  });

  it('should handle the repoLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(appReducer(state, repoLoadingError(fixture))).toEqual(expectedResult);
  });
});
*/
