import { fromJS } from 'immutable';
import reducer from '../reducer';
import { SUBMIT_NEW, SUBMIT_EDIT } from '../constants';


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
  it('handles the SUBMIT_EDIT action properly', () => {
    const application = {
      company: 'Test',
      contact: 'me@you.com',
      createdAt: Date.now(),
      id: 'aksuh3298af',
      state: [
        {
          status: 'Recieved Reply',
          notes: 'blah blah blah',
          updated: Date.now()
        },
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
      state: [],
      id: 0
    });

    const result = reducer(initialState, { type: SUBMIT_EDIT, application }).toJS();
    expect(result.company).toEqual('Test');
    expect(result.id).toEqual(application.id);
    expect(result.state.length).toEqual(2);
  });
});
