import uuidv4 from 'uuid/v4';
import { updateApplication, appFromData, createApplication, updateApplications, deleteApplication } from '../application.utils';

describe('Application Utils', () => {
  describe('createApplication', () => {
    it('Should return a new application object with an id property', () => {
      const fixture = { company: 'Test' };
      expect('id' in createApplication(fixture)).toEqual(true);
    });
  });
  describe('updateApplications', () => {
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

      const test = updateApplications(initialApplications, updatedRecord);
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
  describe('appFromData', () => {
    it('creates an application object, with a state array, from form data', () => {
      const data = {
        company: 'test',
        contact: 'me@you.com',
        notes: 'blah blah blah',
        status: 'Applied',
      };
      const result = appFromData(data);
      expect(result.company).toEqual(data.company);
      expect(result.contact).toEqual(data.contact);
      expect('createdAt' in result).toEqual(true);
      expect(result.state.length).toEqual(1);
      expect(result.state[0].notes).toEqual(data.notes);
      expect(result.state[0].status).toEqual(data.status);
    });
  });
  describe('applicationUpdate', () => {
    it('updates the application record without overwriting previous state records', () => {
      const date = Date.parse('Dec 20, 1989');
      const date2 = Date.parse('Dec 2, 1989');
      const data = {
        company: 'test',
        contact: 'me@you.com',
        notes: 'blah blah blah blah. The best blah.',
        status: 'Replied',
      };
      const initialState = {
        company: 'Boring',
        contact: 'hole@notdrilledyet.com',
        state: [
          {
            notes: 'blah blah blah',
            status: 'Applied',
            updated: date
          },
          {
            notes: 'blah',
            status: 'Considering',
            updated: date2
          }
        ]
      };
      const result = updateApplication(initialState, data);
      expect(result.state.length).toEqual(2);
      expect(result.company).toEqual('test');
      expect(result.state[0].notes).toEqual(data.notes);
    });
  });
});
