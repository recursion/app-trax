import React from 'react';
import { mount } from 'enzyme';
import ContactInput from '../ContactInput';

const setup = (propOverrides) => {
  const props = Object.assign({
    contact: 'me@you.com',
    handleChangeField: jest.fn()
  }, propOverrides);

  const wrapper = mount(<ContactInput {...props} />);

  return {
    props,
    wrapper
  };
};

describe('ContactInput', () => {
  it('renders the contact name', () => {
    const { wrapper } = setup();
    expect(wrapper.find('#contact').props().value).toEqual('me@you.com');
  });
  it('calls handleFieldChange on any input changes', () => {
    const { wrapper, props } = setup();
    wrapper.find('#contact').simulate('change', { target: { value: 'you@me.com' } });
    expect(props.handleChangeField).toBeCalledWith('contact', 'you@me.com');
  });
});
