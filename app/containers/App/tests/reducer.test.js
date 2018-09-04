import { fromJS } from 'immutable';

import appReducer from '../reducer';
import { addApplication } from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      applications: []
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the addApplictions action correctly', () => {
    const fixture = { company: 'Test' };
    const expectedResult = state
      .set('applications', state.get('applications').push(fixture));

    expect(appReducer(state, addApplication(fixture))).toEqual(expectedResult);
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
