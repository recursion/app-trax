import { getCurrent, updateCurrent } from '../status.utils';

describe('status utils', () => {
  describe('currentState', () => {
    it('returns the first item in the array', () => {
      const stateHistory = [{ test: 'Test' }, { test: 'Test2' }];
      expect(getCurrent(stateHistory).test).toEqual('Test');
    });
  });

  describe('updateCurrent', () => {
    it('updates the first record in the state history array', () => {
      const stateHistory = [{ test: 'Test' }, { test: 'Test2' }];
      expect(updateCurrent(stateHistory, [{ test: 'Updated' }])[0].test).toEqual('Updated');
    });
  });
});
