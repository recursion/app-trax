import { ADD_APPLICATION } from '../constants';

import { addApplication } from '../actions';

describe('App Actions', () => {
  describe('addApplication', () => {
    it('should return the correct type', () => {
      const fixture = { company: 'TestCompany' };
      const expectedResult = {
        type: ADD_APPLICATION,
        application: fixture
      };

      expect(addApplication(fixture)).toEqual(expectedResult);
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
