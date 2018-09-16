import React from 'react';
import { mount } from 'enzyme';
import NotesInput from '../NotesInput';

const setup = (propOverrides) => {
  const props = Object.assign({
    notes: 'Blah blah blah',
    handleChangeField: jest.fn()
  }, propOverrides);

  const wrapper = mount(<NotesInput {...props} />);

  return {
    props,
    wrapper
  };
};

describe('NotesInput', () => {
  it('renders the notes', () => {
    const { wrapper } = setup();
    expect(wrapper.find('#notes').props().value).toEqual('Blah blah blah');
  });
  it('calls handleFieldChange on any input changes', () => {
    const { wrapper, props } = setup();
    wrapper.find('#notes').simulate('change', { target: { value: 'you@me.com' } });
    expect(props.handleChangeField).toBeCalledWith('notes', 'you@me.com');
  });
});
