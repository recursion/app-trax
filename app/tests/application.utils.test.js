import uuidv4 from 'uuid/v4';
import { createApplication, updateApplication, deleteApplication } from '../application.utils';

describe('Application Utils', () => {
  describe('createApplication', () => {
    it('Should return a new application object with an id property', () => {
      const fixture = { company: 'Test' };
      expect('id' in createApplication(fixture)).toEqual(true);
    });
  });
  describe('updateApplication', () => {
    it('should alter the record of an existing entry in the applications array', () => {
      const initialApplications = [
        {
          company: 'Test',
          contact: 'marco@test.com',
          id: uuidv4()
        },
        {
          company: 'Test2',
          contact: 'marco@test2.com',
          id: uuidv4()
        },
        {
          company: 'Test3',
          contact: 'marco@test3.com',
          id: uuidv4()
        }
      ];
      const updatedRecord = Object.assign({}, initialApplications[1], { company: 'WOOT', contact: 'me@you.com' });

      const test = updateApplication(initialApplications, updatedRecord);
      expect(test[1].company).toEqual('WOOT');
      expect(test[1].contact).toEqual('me@you.com');
    });
  });
  describe('deleteApplication', () => {
    it('should remove a record from an application', () => {
      const initialApplications = [
        {
          company: 'Test',
          contact: 'marco@test.com',
          id: uuidv4()
        },
        {
          company: 'Test2',
          contact: 'marco@test2.com',
          id: uuidv4()
        },
        {
          company: 'Test3',
          contact: 'marco@test3.com',
          id: uuidv4()
        }
      ];
      const record = initialApplications[1];
      const test = deleteApplication(initialApplications, record);
      expect(test.length).toEqual(2);
    });
  });
});
