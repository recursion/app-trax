import { fromJS } from 'immutable';

import appReducer from '../reducer';
import { addApplication, updateApplication } from '../actions';

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

  it('addApplictions action should cause a new application to be added to applications', () => {
    const fixture = { company: 'Test' };
    const expectedResult = state
      .set('applications', state.get('applications').push(fixture));

    expect(appReducer(state, addApplication(fixture)).company).toEqual(expectedResult.company);
  });

  it('updateApplication should update a specific application with new information', () => {
    const fixture = { company: 'Test' };
    const initialState = state
      .set('applications', state.get('applications').push(fixture));
    const target = initialState.get('applications').toJS()[0];
    const updateFixture = Object.assign({}, target, { company: 'FU' });

    const nextState = appReducer(initialState, updateApplication(updateFixture)).toJS();

    expect(nextState.applications
      .filter((app) => app.createdAt === target.createdAt)[0]).toEqual(updateFixture);
  });
});
