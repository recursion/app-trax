import React from 'react';
import { mount, shallow } from 'enzyme';
import ApplicationForm from '../index';

describe('ApplicationForm', () => {
  it('renders an ApplicationForm', () => {
    const wrapper = shallow(<ApplicationForm />);
    expect(wrapper.find('.application-form').length).toEqual(1);
  });

  it('calls the onCancel function when the cancel button is clicked', () => {
    const onSubmit = jest.fn();
    const onCancel = jest.fn();
    const wrapper = mount(<ApplicationForm onSubmit={onSubmit} onCancel={onCancel} />);
    wrapper.find('.application-form__cancel-button').simulate('click');
    expect(onCancel).toBeCalled();
  });

  it('it will not submit without a company name', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(<ApplicationForm onSubmit={onSubmit} onCancel={() => {}} />);
    wrapper.find('.application-form__submit-button').simulate('click');
    expect(onSubmit).not.toBeCalled();
  });

  it('renders a help message when submit is clicked with an empty company name', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(<ApplicationForm onSubmit={onSubmit} onCancel={() => {}} />);
    wrapper.find('.application-form__submit-button').simulate('click');
    expect(wrapper.find('.application-form__company-help-msg').length).toEqual(1);
  });

  it('calls the onSubmit function when the submit button is clicked with valid form data', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(<ApplicationForm onSubmit={onSubmit} onCancel={() => {}} />);
    const input = wrapper.find('#company');
    input.simulate('change', { target: { value: 'Test Company' } });
    wrapper.find('.application-form__submit-button').simulate('click');
    expect(onSubmit).toBeCalled();
  });

  it('passes the form data to the onSubmit function when submit is clicked', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(<ApplicationForm onSubmit={onSubmit} onCancel={() => {}} />);
    const notes = 'Wootsy doots and wutsy wuts';
    const company = 'Test Company';

    const companyNameInput = wrapper.find('#company');
    companyNameInput.simulate('change', { target: { value: company } });

    const notesInput = wrapper.find('#notes');
    notesInput.simulate('change', { target: { value: notes } });

    wrapper.find('.application-form__submit-button').simulate('click');

    const submittedApplication = onSubmit.mock.calls[0][0];
    expect(onSubmit).toBeCalled();
    expect('company' in submittedApplication);
    expect('state' in submittedApplication);
    expect(submittedApplication.company).toEqual(company);
    expect(submittedApplication.state[0].notes).toEqual(notes);
    expect(submittedApplication.state[0].status).toEqual('Considering');
  });
  describe('Returned Application Data', () => {
    it('creates a state property that is an array of objects with notes, status, and updated props', () => {
      const onSubmit = jest.fn();
      const wrapper = mount(<ApplicationForm onSubmit={onSubmit} onCancel={() => {}} />);
      const notes = 'Wootsy doots and wutsy wuts';
      const company = 'Test Company';

      const companyNameInput = wrapper.find('#company');
      companyNameInput.simulate('change', { target: { value: company } });

      const notesInput = wrapper.find('#notes');
      notesInput.simulate('change', { target: { value: notes } });

      wrapper.find('.application-form__submit-button').simulate('click');

      const submittedApplication = onSubmit.mock.calls[0][0];

      expect('state' in submittedApplication);
      expect(Array.isArray(submittedApplication.state)).toEqual(true);
      expect(submittedApplication.state[0].status).toEqual('Considering');
      expect('updated' in submittedApplication.state[0]).toEqual(true);
    });
  });
});
