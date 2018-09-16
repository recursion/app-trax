import React from 'react';
import { mount } from 'enzyme';
import CompanyInput from '../CompanyInput';

const setup = (propOverrides) => {
  const props = Object.assign({
    company: 'TestCo',
    companyHelpMsg: false,
    handleChangeField: jest.fn()
  }, propOverrides);

  const wrapper = mount(<CompanyInput {...props} />);

  return {
    props,
    wrapper
  };
};

describe('CompanyInput', () => {
  it('renders the company name', () => {
    const { wrapper } = setup();
    expect(wrapper.find('#company').props().value).toEqual('TestCo');
  });
  it('calls handleFieldChange on any input changes', () => {
    const { wrapper, props } = setup();
    wrapper.find('#company').simulate('change', { target: { value: 'DO IT!' } });
    expect(props.handleChangeField).toBeCalledWith('company', 'DO IT!');
  });
  it('renders a help message when companyHelpMsg is true', () => {
    const { wrapper } = setup({ companyHelpMsg: true });
    expect(wrapper.find('.help').length).toEqual(1);
  });
});
