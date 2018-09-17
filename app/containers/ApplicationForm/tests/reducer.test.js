import { fromJS } from 'immutable';
import reducer from '../reducer';
import { SUBMIT_NEW } from '../constants';


describe('ApplicationForm Reducer', () => {
  it('handles the SUBMIT_NEW action properly', () => {
    const application = {
      company: 'Test',
      contact: 'me@you.com',
      createdAt: Date.now(),
      state: [
        {
          status: 'Applied',
          notes: 'blah blah blah',
          updated: Date.now()
        }
      ]
    };

    const initialState = fromJS({
      company: '',
      contact: '',
      createdAt: '',
      state: []
    });

    const result = reducer(initialState, { type: SUBMIT_NEW, application }).toJS();
    expect(result.company).toEqual('Test');
    expect(result.state.length).toEqual(1);
  });
});
