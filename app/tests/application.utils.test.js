import { updateApplication, appFromData } from '../application.utils';

describe('Application Utils', () => {
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
