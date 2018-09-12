import React from 'react';
import { mount } from 'enzyme';
import uuidv4 from 'uuid/v4';
import ApplicationUpdate from '../ApplicationUpdate';

const setup = (propOverrides) => {
  const props = Object.assign({
    item: {
      company: 'Test2',
      contact: 'test@test.com',
      state: [{ status: 'Considering', notes: 'Stuff' }],
      createdAt: Date.now(),
      id: uuidv4()
    },
    update: jest.fn()
  }, propOverrides);

  const wrapper = mount(<ApplicationUpdate {...props} />);

  return {
    props,
    wrapper
  };
};

describe('ApplicationUpdate', () => {
  it('renders the current status', () => {
    const { wrapper } = setup();
    const test = wrapper.find('#status').props().value;
    expect(test).toEqual('Considering');
  });

  it('calls update with no args when cancel is clicked', () => {
    const { wrapper, props: { update } } = setup();
    wrapper.find('.application-form__cancel-button').simulate('click');
    expect(update).toBeCalled();
    expect(update).toBeCalledWith();
  });

  it('calls update with an item when submit is clicked', () => {
    const { wrapper, props: { update } } = setup();
    const input = wrapper.find('#status');
    input.simulate('change', { target: { value: 'Rejected' } });
    expect(wrapper.find('#status').props().value).toEqual('Rejected');
    wrapper.find('.application-form__submit-button').simulate('click');
    expect(update).toBeCalled();
    expect(update.mock.calls[0]).not.toEqual(null);
  });

  it('adds an updatedAt property to the status object', () => {
    const { wrapper, props: { update } } = setup();
    const input = wrapper.find('#status');
    input.simulate('change', { target: { value: 'Rejected' } });
    expect(wrapper.find('#status').props().value).toEqual('Rejected');
    wrapper.find('.application-form__submit-button').simulate('click');
    expect(update).toBeCalled();
    expect('createdAt' in update.mock.calls[0][0]).toBe(true);
  });
});
