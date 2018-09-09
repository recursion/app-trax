import { createApplication, updateApplication, deleteApplication } from '../application.utils';

describe('Application Utils', () => {
  describe('createApplication', () => {
    it('Should return a new application object with a createdAt property attached', () => {
      const fixture = { company: 'Test' };
      expect('createdAt' in createApplication(fixture)).toEqual(true);
    });
  });
  describe('updateApplication', () => {
    it('should alter the record of an existing entry in the applications array', () => {
      const initialApplications = [
        {
          company: 'Test',
          contact: 'marco@test.com',
          createdAt: Date.parse('Dec 25, 1995')
        },
        {
          company: 'Test2',
          contact: 'marco@test2.com',
          createdAt: Date.now('Dec 28, 1998')
        },
        {
          company: 'Test3',
          contact: 'marco@test3.com',
          createdAt: Date.now('Dec 29, 1999')
        }
      ];
      const updatedRecord = {
        company: 'Test200',
        contact: 'marco@test200.com',
        createdAt: Date.now('Dec 28, 1998')
      };
      const test = updateApplication(initialApplications, updatedRecord);
      expect(test[1].company).toEqual('Test200');
      expect(test[1].contact).toEqual('marco@test200.com');
    });
  });
  describe('deleteApplication', () => {
    it('should remove a record from an application', () => {
      const initialApplications = [
        {
          company: 'Test',
          contact: 'marco@test.com',
          createdAt: Date.parse('Dec 25, 1995')
        },
        {
          company: 'Test2',
          contact: 'marco@test2.com',
          createdAt: Date.parse('Dec 28, 1998')
        },
        {
          company: 'Test3',
          contact: 'marco@test3.com',
          createdAt: Date.parse('Dec 29, 2000')
        }
      ];
      const record = initialApplications[1];
      const test = deleteApplication(initialApplications, record);
      expect(test.length).toEqual(2);
    });
  });
});
