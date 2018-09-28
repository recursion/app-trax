import { fromJS } from 'immutable';
import reducer from '../reducer';
import { CHANGE_FIELD, SUBMIT_NEW, SUBMIT_EDIT } from '../constants';

// record type for defining a field
const field = {
  name: '', // field name
  type: 'text', // field type (or input type in html element terms) - text, textarea, date, email, link
  value: null, // the value
  validator: () => { /* pass a function that returns a bool indicating if value is valid */ },
  changed: Date.now()
};

const initialState = fromJS({
  company: '',
  contact: '',
  createdAt: '',
  state: [],
  id: 0
});

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

    const result = reducer(initialState, { type: SUBMIT_EDIT, application }).toJS();
    expect(result.company).toEqual('Test');
    expect(result.id).toEqual(application.id);
    expect(result.state.length).toEqual(2);
  });

  describe('handles the CHANGE_FIELD action properly', () => {
    it('when the fieldName is company', () => {
      const fieldName = 'company';
      const nextValue = 'explorers.com';
      const result = reducer(initialState, { type: CHANGE_FIELD, fieldName, nextValue }).toJS();
      expect(result.company).toEqual(nextValue);
    });

    it('when the fieldName is contact', () => {
      const fieldName = 'contact';
      const nextValue = 'me@you.com';
      const result = reducer(initialState, { type: CHANGE_FIELD, fieldName, nextValue }).toJS();
      expect(result.contact).toEqual(nextValue);
    });

    it('when the fieldName is createdAt', () => {
      const fieldName = 'date';
      const nextValue = Date.now();
      const result = reducer(initialState, { type: CHANGE_FIELD, fieldName, nextValue }).toJS();
      expect(result.date).toEqual(nextValue);
    });
  });
});
