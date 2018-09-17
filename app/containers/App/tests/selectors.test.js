import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectApplications
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const globalState = fromJS({
      applications: []
    });
    const mockedState = fromJS({
      global: globalState,
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});
describe('makeSelectApplications', () => {
  const applicationsSelector = makeSelectApplications();
  it('should select applications', () => {
    const applications = [{ company: 'Test' }, { company: 'Test2' }];
    const mockedState = fromJS({
      global: {
        applications,
      },
    });
    expect(applicationsSelector(mockedState)).toEqual(applications);
  });
});
