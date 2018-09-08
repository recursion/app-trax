import { DELETE_APPLICATION, ADD_APPLICATION, UPDATE_APPLICATION } from '../constants';
import { deleteApplication, addApplication, updateApplication } from '../actions';

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

  describe('updateApplication', () => {
    it('should return the correct type', () => {
      const fixture = { company: 'TestCompany' };
      const expectedResult = {
        type: UPDATE_APPLICATION,
        application: fixture
      };

      expect(updateApplication(fixture)).toEqual(expectedResult);
    });
  });

  describe('deleteApplication', () => {
    it('should return the correct type', () => {
      const fixture = { company: 'TestCompany' };
      const expectedResult = {
        type: DELETE_APPLICATION,
        application: fixture
      };

      expect(deleteApplication(fixture)).toEqual(expectedResult);
    });
  });
});
