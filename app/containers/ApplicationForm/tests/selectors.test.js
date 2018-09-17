import { fromJS } from 'immutable';

import {
  selectApplicationForm,
  makeSelectCompany,
  makeSelectContact,
  makeSelectCreatedAt,
  makeSelectId,
  makeSelectState
} from '../selectors';

describe('selectHome', () => {
  it('should select the application form state', () => {
    const appFormState = fromJS({
      company: '',
      contact: '',
      createdAt: 0,
      state: [],
      id: 0
    });
    const mockedState = fromJS({
      applicationForm: appFormState
    });
    expect(selectApplicationForm(mockedState)).toEqual(appFormState);
  });
});
describe('makeSelectCompany', () => {
  const companySelector = makeSelectCompany();
  it('should select Company', () => {
    const company = 'Company2';
    const mockedState = fromJS({
      applicationForm: {
        company,
      },
    });
    expect(companySelector(mockedState)).toEqual(company);
  });
});

describe('makeSelectContact', () => {
  const contactSelector = makeSelectContact();
  it('should select Contact', () => {
    const contact = 'me@you.com';
    const mockedState = fromJS({
      applicationForm: {
        contact,
      },
    });
    expect(contactSelector(mockedState)).toEqual(contact);
  });
});

describe('makeSelectCreatedAt', () => {
  const createdAtSelector = makeSelectCreatedAt();
  it('should select createdAt', () => {
    const createdAt = Date.now();
    const mockedState = fromJS({
      applicationForm: {
        createdAt,
      },
    });
    expect(createdAtSelector(mockedState)).toEqual(createdAt);
  });
});

describe('makeSelectId', () => {
  const idSelector = makeSelectId();
  it('should select id', () => {
    const id = 'h3298fa-2378yhad7-u2h347';
    const mockedState = fromJS({
      applicationForm: {
        id,
      },
    });
    expect(idSelector(mockedState)).toEqual(id);
  });
});

describe('makeSelectState', () => {
  const stateSelector = makeSelectState();
  it('should select state', () => {
    const state = fromJS([{ notes: 'yay', status: 'Testing' }]);
    const mockedState = fromJS({
      applicationForm: {
        state,
      },
    });
    expect(stateSelector(mockedState)).toEqual(state);
  });
});
