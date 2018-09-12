import React from 'react';
import { mount } from 'enzyme';
import ApplicationUpdate from '../ApplicationUpdate';

describe('ApplicationUpdate', () => {
  it('renders the current status', () => {
    const item = {
      name: 'Test',
      contact: 'testers',
      state: [{ notes: '', status: 'Considering' }],
      createdAt: Date.now()
    };
    const wrapper = mount(<ApplicationUpdate item={item} />);
    const test = wrapper.find('#status').props().value;
    expect(test).toEqual('Considering');
  });
  it('calls update with no args when cancel is clicked', () => {
    const item = {
      name: 'Test',
      contact: 'testers',
      state: [{ notes: '', status: 'Applied' }],
      createdAt: Date.now()
    };
    const update = jest.fn();
    const wrapper = mount(<ApplicationUpdate item={item} update={update} />);
    wrapper.find('.application-form__cancel-button').simulate('click');
    expect(update).toBeCalled();
    expect(update).toBeCalledWith();
  });
  it('calls update with an item when submit is clicked', () => {
    const item = {
      name: 'Test',
      contact: 'testers',
      state: [{ notes: '', status: 'Applied' }],
      createdAt: Date.now()
    };
    const update = jest.fn();
    const wrapper = mount(<ApplicationUpdate item={item} update={update} />);
    const input = wrapper.find('#status');
    input.simulate('change', { target: { value: 'Rejected' } });
    expect(wrapper.find('#status').props().value).toEqual('Rejected');
    wrapper.find('.application-form__submit-button').simulate('click');
    expect(update).toBeCalled();
    expect(update.mock.calls[0]).not.toEqual(null);
  });
  it('adds an updatedAt property to the status object', () => {
    const item = {
      name: 'Test',
      contact: 'testers',
      state: [{ notes: '', status: 'Applied', updatedAt: Date.now() }],
      createdAt: Date.now()
    };
    const update = jest.fn();
    const wrapper = mount(<ApplicationUpdate item={item} update={update} />);
    const input = wrapper.find('#status');
    input.simulate('change', { target: { value: 'Rejected' } });
    expect(wrapper.find('#status').props().value).toEqual('Rejected');
    wrapper.find('.application-form__submit-button').simulate('click');
    expect(update).toBeCalled();
    expect('createdAt' in update.mock.calls[0][0]).toBe(true);
  });
});
