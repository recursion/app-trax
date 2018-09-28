import React from 'react';
import MockRouter from 'react-mock-router';
import { mount } from 'enzyme';
import ApplicationForm from '../ApplicationForm';

const setup = (propOverrides, params) => {
  const props = Object.assign({
    applications: [
      {
        company: 'Test',
        contact: 'test',
        state: [{ status: 'Testing', notes: '', updated: Date.now }, { status: 'Testing2', notes: '2forYou', updated: Date.now }],
        createdAt: Date.now(),
        id: 'lkjasdlf9109123lk109d'
      },
      {
        company: 'Test2',
        contact: 'test@test.com',
        state: [{ status: 'Applied', notes: 'Stuff', updated: Date.now() }],
        createdAt: Date.now(),
        id: 'lkj2s8lf9109123lk109d-alsd2333'
      }
    ],
    addApplication: jest.fn(),
    deleteApplication: jest.fn(),
    updateApplication: jest.fn()
  }, propOverrides);

  const wrapper = mount(
    <MockRouter params={params} >
      <ApplicationForm {...props} />
    </MockRouter>
  );

  return {
    props,
    wrapper
  };
};

describe('ApplicationForm', () => {
  it('renders an ApplicationForm', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.application-form').length).toEqual(1);
  });

  it('renders a Create New title when no application props were passed in', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.application-form__title').text()).toEqual('Add Company');
  });

  it('renders an Edit title when given a valid application id', () => {
    const { wrapper } = setup({}, { id: 'lkjasdlf9109123lk109d' });
    expect(wrapper.find('.application-form__title').text()).toEqual('Edit');
  });

  describe('Create New', () => {
    it('it will not submit without a company name', () => {
      const { props: { addApplication }, wrapper } = setup();
      wrapper.find('.application-form__submit-button').simulate('click');
      expect(addApplication).not.toBeCalled();
    });

    it('adds a createdAt property to the object', () => {
      const { props: { addApplication }, wrapper } = setup();
      wrapper.find('#company').simulate('change', { target: { value: 'Test Company' } });
      wrapper.find('#contact').simulate('change', { target: { value: 'me@you.com' } });
      wrapper.find('.application-form__submit-button').simulate('click');
      expect('createdAt' in addApplication.mock.calls[0][0]).toEqual(true);
    });

    it('renders a help message when submit is clicked with an empty company name', () => {
      const { wrapper } = setup();
      wrapper.find('.application-form__submit-button').simulate('click');
      expect(wrapper.find('.application-form__company-help-msg').length).toEqual(1);
    });

    it('calls the addApplication function when the submit button is clicked with valid form data', () => {
      const { props: { addApplication }, wrapper } = setup();
      const input = wrapper.find('#company');
      input.simulate('change', { target: { value: 'Test Company' } });
      wrapper.find('.application-form__submit-button').simulate('click');
      expect(addApplication).toBeCalled();
    });
  });

  describe('Edit existing', () => {
    it('renders a delete button if an application was passed in', () => {
      const { wrapper } = setup({}, { id: 'lkjasdlf9109123lk109d' });
      expect(wrapper.find('.application-form__delete-button').length).toEqual(1);
    });

    it('calls the onDelete function when the delete button is clicked', () => {
      const { props: { deleteApplication }, wrapper } = setup({}, { id: 'lkjasdlf9109123lk109d' });
      wrapper.find('.application-form__delete-button').simulate('click');
      expect(deleteApplication).toBeCalled();
    });

    it('correctly renders existing company name, contact data, notes, and status when passed in', () => {
      const { props: { applications }, wrapper } = setup({}, { id: 'lkjasdlf9109123lk109d' });
      const item = applications[0];
      expect(wrapper.find('#company').props().value).toEqual(item.company);
      expect(wrapper.find('#contact').props().value).toEqual(item.contact);
      expect(wrapper.find('#status').props().value).toEqual(item.state[0].status);
      expect(wrapper.find('#notes').props().value).toEqual(item.state[0].notes);
    });

    it('does not overwrite an existing state array when updating the current state', () => {
      const { props: { updateApplication }, wrapper } = setup({}, { id: 'lkjasdlf9109123lk109d' });
      wrapper.find('.application-form__submit-button').simulate('click');
      expect(updateApplication).toBeCalled();
      expect(updateApplication.mock.calls[0][0].state.length).toEqual(2);
    });

    it('has a non-null id property', () => {
      const { props: { updateApplication }, wrapper } = setup({}, { id: 'lkjasdlf9109123lk109d' });

      wrapper.find('#company').simulate('change', { target: { value: 'FU' } });
      wrapper.find('#contact').simulate('change', { target: { value: 'me@you.com' } });
      wrapper.find('#status').simulate('change', { target: { value: 'Offer Accepted' } });
      wrapper.find('#notes').simulate('change', { target: { value: 'Hope this works out' } });
      wrapper.find('.application-form__submit-button').simulate('click');

      expect(updateApplication).toBeCalled();
      expect(updateApplication.mock.calls[0][0].id).not.toEqual('');
      expect('id' in updateApplication.mock.calls[0][0]).toEqual(true);
    });
  });
});
