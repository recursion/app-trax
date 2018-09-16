import React from 'react';
import { mount } from 'enzyme';
import StatusInput from '../StatusInput';

const setup = (propOverrides) => {
  const props = Object.assign({
    status: 'Applied',
    handleChangeField: jest.fn()
  }, propOverrides);

  const wrapper = mount(<StatusInput {...props} />);

  return {
    props,
    wrapper
  };
};

describe('StatusInput', () => {
  it('renders the status', () => {
    const { wrapper } = setup();
    expect(wrapper.find('#status').props().value).toEqual('Applied');
  });
  it('calls handleFieldChange on any input changes', () => {
    const { wrapper, props } = setup();
    wrapper.find('#status').simulate('change', { target: { value: 'Rejected' } });
    expect(props.handleChangeField).toBeCalledWith('status', 'Rejected');
  });
});
