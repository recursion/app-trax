import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import ApplicationItemControls from '../ApplicationItemControls';

describe('ApplicationItemControls', () => {
  it('does not render a history button when state history is 1 or less', () => {
    const app = {
      company: 'test',
      contact: 'test',
      createdAt: Date.now()
    };
    const itemState = [{ status: '', notes: '' }];
    const wrapped = mount(
      <MemoryRouter>
        <ApplicationItemControls app={app} itemState={itemState} />
      </MemoryRouter>
    );
    expect(wrapped.exists('.application-item__history-button')).toEqual(false);
  });

  it('does render a history button when state history is greater than 1', () => {
    const app = {
      company: 'test',
      contact: 'test',
      createdAt: Date.now()
    };
    const itemState = [{ status: 'ho', notes: 'yo' }, { status: 'thos', notes: 'that' }];
    const wrapped = mount(
      <MemoryRouter>
        <ApplicationItemControls app={app} itemState={itemState} />
      </MemoryRouter>
    );
    expect(wrapped.exists('.application-item__history-button')).toEqual(true);
  });
});
