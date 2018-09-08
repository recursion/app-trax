import { fromJS } from 'immutable';

import appReducer from '../reducer';
import { deleteApplication, addApplication, updateApplication } from '../actions';

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
    const id = Date.now();
    const fixture = { company: 'Test', createdAt: id };
    const initialState = state
      .set('applications', state.get('applications').push(fixture));
    const target = initialState.get('applications').toJS()[0];
    const updateFixture = Object.assign({}, target, { company: 'FU', createdAt: id });

    const nextState = appReducer(initialState, updateApplication(updateFixture)).toJS();

    expect(nextState.applications
      .filter((app) => app.createdAt === target.createdAt)[0]).toEqual(updateFixture);
  });

  it('deleteApplication should delete a specific application from applications array', () => {
    const id = Date.now();
    const fixture = { company: 'Test', createdAt: id };
    const initialState = state
      .set('applications', fromJS(state.get('applications').push(fixture)));

    const nextState = appReducer(initialState, deleteApplication(fixture)).toJS();

    expect(nextState.applications.length).toEqual(0);
  });
});
