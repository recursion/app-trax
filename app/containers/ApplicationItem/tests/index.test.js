import React from 'react';
import { shallow } from 'enzyme';
import ApplicationItem from '../ApplicationItem';

describe('ApplicationItem', () => {
  it('renders an ApplicationItem', () => {
    const update = () => {};
    const app = {
      company: 'test',
      contact: 'test',
      state: [{ status: '', notes: '' }],
      createdAt: Date.now()
    };
    const wrapped = shallow(<ApplicationItem update={update} app={app} />);
    expect(wrapped.find('.application-item').length).toEqual(1);
  });
});
/*
  it('shows no details by default', () => {
    const update = jest.fn();
    const app = {
      company: 'test',
      contact: 'test',
      state: [{ status: '', notes: '' }],
      createdAt: Date.now()
    };
    const wrapped = shallow(<ApplicationItem update={update} app={app} />);
    expect(wrapped.find('.application-details').length).toEqual(0);
  });

  it('renders an expand button', () => {
    const update = () => {};
    const app = {
      company: 'test',
      contact: 'test',
      state: [{ status: '', notes: '' }],
      createdAt: Date.now()
    };
    const wrapped = mount(<ApplicationItem update={update} app={app} />);
    expect(wrapped.find('.application-item__expand-button').length).toEqual(1);
  });

  it('does not render a history button when state history is 1 or less', () => {
    const update = () => {};
    const app = {
      company: 'test',
      contact: 'test',
      state: [{ status: '', notes: '' }],
      createdAt: Date.now()
    };
    const wrapped = mount(<ApplicationItem update={update} app={app} />);
    wrapped.find('.application-item__expand-button').simulate('click');
    expect(wrapped.find('.application-item__history-button').length).toEqual(0);
  });

  it('does render a history button when state history is greater than 1', () => {
    const update = () => {};
    const app = {
      company: 'test',
      contact: 'test',
      state: [{ status: 'tes', notes: 'blah blah' }, { status: 'test2', notes: 'stuff' }],
      createdAt: Date.now()
    };
    const wrapped = mount(<ApplicationItem update={update} app={app} />);
    wrapped.find('.application-item__expand-button').simulate('click');
    expect(wrapped.find('.application-item__history-button').length).toEqual(1);
  });

  it('expands the view when the expand button is clicked', () => {
    const update = () => {};
    const app = {
      company: 'test',
      contact: 'test',
      state: [{ status: '', notes: '' }],
      createdAt: Date.now()
    };
    const wrapped = mount(<ApplicationItem update={update} app={app} />);
    expect(wrapped.find('.application-details').length).toEqual(0);
    wrapped.find('.application-item__expand-button').simulate('click');
    expect(wrapped.find('.application-details').length).toEqual(1);
  });

  it('minimizes the view when the collapse button is clicked', () => {
    const update = () => {};
    const app = {
      company: 'test',
      contact: 'test',
      state: [{ status: '', notes: '' }],
      createdAt: Date.now()
    };
    const wrapped = mount(<ApplicationItem update={update} app={app} />);
    expect(wrapped.find('.application-details').length).toEqual(0);
    wrapped.find('.application-item__expand-button').simulate('click');
    expect(wrapped.find('.application-details').length).toEqual(1);
    wrapped.find('.application-item__expand-button').simulate('click');
    expect(wrapped.find('.application-details').length).toEqual(0);
  });
});
*/
