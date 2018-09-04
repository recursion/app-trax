import { TOGGLE_NEW_APPLICATION_INPUT } from '../constants';

import { toggleNewApplicationInput } from '../actions';

describe('App Actions', () => {
  describe('toggleNewApplicationInput', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: TOGGLE_NEW_APPLICATION_INPUT,
      };
      expect(toggleNewApplicationInput()).toEqual(expectedResult);
    });
  });

  /*
  describe('reposLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_REPOS_SUCCESS,
        repos: fixture,
        username,
      };

      expect(reposLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('repoLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_REPOS_ERROR,
        error: fixture,
      };

      expect(repoLoadingError(fixture)).toEqual(expectedResult);
    });
  });
  */
});
