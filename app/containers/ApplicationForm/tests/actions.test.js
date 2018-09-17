import { submitNew, submitEdit } from '../actions';
import { SUBMIT_NEW, SUBMIT_EDIT } from '../constants';

describe('submitNew', () => {
  it('formats form data into an application object', () => {
    const initialData = {
      company: 'MeCorp',
      contact: 'me@you.com',
      createdAt: Date.now(),
      notes: 'Yaaaah me!',
      status: 'Considering'
    };
    const { type, application } = submitNew(initialData);
    expect(type).toEqual(SUBMIT_NEW);
    expect(application.state[0].notes).toEqual(initialData.notes);
    expect(application.state[0].status).toEqual(initialData.status);
    expect(application.company).toEqual(initialData.company);
  });
});
describe('submitEdit', () => {
  it('formats form data into an existing application object update', () => {
    const initialData = {
      company: 'MeCorp',
      contact: 'me@you.com',
      createdAt: Date.now(),
      state: [
        {
          notes: 'Do it!',
          status: 'Applied',
          updated: Date.now()
        },
        {
          notes: 'Yaaaah me!',
          status: 'Considering',
          updated: Date.now()
        }
      ]
    };
    const updatedData = {
      company: 'MeCorp',
      contact: 'me@you.com',
      createdAt: Date.now(),
      notes: 'Woot',
      status: 'Accepted'
    };
    const { type, application } = submitEdit(initialData, updatedData);
    expect(type).toEqual(SUBMIT_EDIT);
    expect(application.state.length).toEqual(2);
    expect(application.state[0].notes).toEqual(updatedData.notes);
    expect(application.state[0].status).toEqual(updatedData.status);
    expect(application.company).toEqual(updatedData.company);
  });
});
