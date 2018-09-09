
import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import ApplicationItemDetails from '../ApplicationItemDetails';

describe('ApplicationItemDetails', () => {
  it('renders the notes of an application item', () => {
    const app = {
      company: 'test',
      contact: 'test',
      state: [{ status: 'Applied', notes: 'blah blah blah' }],
      createdAt: Date.now()
    };
    const wrapper = mount(
      <MemoryRouter>
        <ApplicationItemDetails app={app} state={app.state} />
      </MemoryRouter>
    );
    expect(wrapper.find('.application-details > div > p').text()).toEqual('blah blah blah');
  });

  it('does not render empty contact info', () => {
    const app = {
      company: 'test',
      contact: '',
      state: [{ status: 'Applied', notes: 'blah blah blah' }],
      createdAt: Date.now()
    };
    const wrapper = mount(
      <MemoryRouter>
        <ApplicationItemDetails {...app} />
      </MemoryRouter>
    );
    expect(wrapper.exists('.application-details__contact')).toEqual(false);
  });

  it('does render contact info when it exists', () => {
    const app = {
      company: 'test',
      contact: 'Eh Oh',
      state: [{ status: 'Applied', notes: 'blah blah blah' }],
      createdAt: Date.now()
    };
    const wrapper = mount(
      <MemoryRouter>
        <ApplicationItemDetails {...app} />
      </MemoryRouter>
    );
    expect(wrapper.exists('.application-details__contact')).toEqual(true);
  });

  it('renders children when they exist', () => {
    const app = {
      company: 'test',
      contact: 'Eh Oh',
      state: [{ status: 'Applied', notes: 'blah blah blah' }],
      createdAt: Date.now()
    };
    const wrapper = mount(
      <MemoryRouter>
        <ApplicationItemDetails {...app} >
          <div className="test-div"></div>
        </ApplicationItemDetails>
      </MemoryRouter>
    );
    expect(wrapper.exists('.test-div')).toEqual(true);
  });
});
