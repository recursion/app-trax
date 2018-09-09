import React from 'react';
import { MemoryRouter } from 'react-router';
import MockRouter from 'react-mock-router';
import { mount } from 'enzyme';
import ApplicationForm from '../ApplicationForm';

describe('ApplicationForm', () => {
  it('renders an ApplicationForm', () => {
    const wrapper = mount(
      <MemoryRouter>
        <ApplicationForm
          addApplication={() => {}}
          deleteApplication={() => {}}
          updateApplication={() => {}}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('.application-form').length).toEqual(1);
  });

  it('renders a Create New title when no application props were passed in', () => {
    const wrapper = mount(
      <MemoryRouter>
        <ApplicationForm
          addApplication={() => {}}
          deleteApplication={() => {}}
          updateApplication={() => {}}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('.application-form__title').text()).toEqual('Create New');
  });

  it('renders an Edit title when given a valid application id', () => {
    const id = Date.now();
    const mockApps = [
      {
        company: 'Test',
        createdAt: id
      }
    ];
    const wrapper = mount(
      <MockRouter params={{ id }}>
        <ApplicationForm
          addApplication={() => {}}
          deleteApplication={() => {}}
          updateApplication={() => {}}
          applications={mockApps}
        />
      </MockRouter>
    );
    expect(wrapper.find('.application-form__title').text()).toEqual('Edit');
  });
  describe('Create New', () => {
    it('it will not submit without a company name', () => {
      const addMock = jest.fn();
      const wrapper = mount(
        <MemoryRouter>
          <ApplicationForm
            addApplication={addMock}
            deleteApplication={() => {}}
            updateApplication={() => {}}
          />
        </MemoryRouter>
      );
      wrapper.find('.application-form__submit-button').simulate('click');
      expect(addMock).not.toBeCalled();
    });

    it('renders a help message when submit is clicked with an empty company name', () => {
      const addMock = jest.fn();
      const wrapper = mount(
        <MemoryRouter>
          <ApplicationForm
            addApplication={addMock}
            deleteApplication={() => {}}
            updateApplication={() => {}}
          />
        </MemoryRouter>
      );
      wrapper.find('.application-form__submit-button').simulate('click');
      expect(wrapper.find('.application-form__company-help-msg').length).toEqual(1);
    });

    it('calls the addApplication function when the submit button is clicked with valid form data', () => {
      const addMock = jest.fn();
      const wrapper = mount(
        <MemoryRouter>
          <ApplicationForm
            addApplication={addMock}
            deleteApplication={() => {}}
            updateApplication={() => {}}
          />
        </MemoryRouter>
      );
      const input = wrapper.find('#company');
      input.simulate('change', { target: { value: 'Test Company' } });
      wrapper.find('.application-form__submit-button').simulate('click');
      expect(addMock).toBeCalled();
    });

    it('passes the form data to the addApplication function when submit is clicked', () => {
      const addMock = jest.fn();
      const wrapper = mount(
        <MemoryRouter>
          <ApplicationForm
            addApplication={addMock}
            deleteApplication={() => {}}
            updateApplication={() => {}}
          />
        </MemoryRouter>
      );
      const notes = 'Wootsy doots and wutsy wuts';
      const company = 'Test Company';

      const companyNameInput = wrapper.find('#company');
      companyNameInput.simulate('change', { target: { value: company } });

      const notesInput = wrapper.find('#notes');
      notesInput.simulate('change', { target: { value: notes } });

      wrapper.find('.application-form__submit-button').simulate('click');

      const submittedApplication = addMock.mock.calls[0][0];
      expect(addMock).toBeCalled();
      expect('company' in submittedApplication);
      expect('state' in submittedApplication);
      expect(submittedApplication.company).toEqual(company);
      expect(submittedApplication.state[0].notes).toEqual(notes);
      expect(submittedApplication.state[0].status).toEqual('Applied');
    });

    describe('Returned Application Data', () => {
      it('creates a state property that is an array of objects with notes, status, and updated props', () => {
        const addMock = jest.fn();
        const wrapper = mount(
          <MemoryRouter>
            <ApplicationForm
              addApplication={addMock}
              deleteApplication={() => {}}
              updateApplication={() => {}}
            />
          </MemoryRouter>
        );
        const notes = 'Wootsy doots and wutsy wuts';
        const company = 'Test Company';

        const companyNameInput = wrapper.find('#company');
        companyNameInput.simulate('change', { target: { value: company } });

        const notesInput = wrapper.find('#notes');
        notesInput.simulate('change', { target: { value: notes } });

        wrapper.find('.application-form__submit-button').simulate('click');

        const submittedApplication = addMock.mock.calls[0][0];

        expect('state' in submittedApplication);
        expect(Array.isArray(submittedApplication.state)).toEqual(true);
        expect(submittedApplication.state[0].status).toEqual('Applied');
        expect('updated' in submittedApplication.state[0]).toEqual(true);
      });
    });
  });

  describe('Edit existing', () => {
    it('renders a delete button if an applicatoin was passed in', () => {
      const id = Date.now();
      const mockApps = [{
        company: 'Test',
        contact: 'Tester@testing.com',
        createdAt: id,
        state: [
          {
            status: 'Considering',
            notes: 'Hopeful on this one!',
            updated: id
          }
        ]
      }];
      const wrapper = mount(
        <MockRouter params={{ id }}>
          <ApplicationForm
            addApplication={() => {}}
            deleteApplication={() => {}}
            updateApplication={() => {}}
            applications={mockApps}
          />
        </MockRouter>
      );
      expect(wrapper.find('.application-form__delete-button').length).toEqual(1);
    });

    it('calls the onDelete function when the delete button is clicked', () => {
      const deleteApplication = jest.fn();
      const id = Date.now();
      const mockApps = [{
        company: 'Test',
        contact: 'Tester@testing.com',
        createdAt: id,
        state: [
          {
            status: 'Considering',
            notes: 'Hopeful on this one!',
            updated: id
          }
        ]
      }];
      const wrapper = mount(
        <MockRouter params={{ id }}>
          <ApplicationForm
            addApplication={() => {}}
            deleteApplication={deleteApplication}
            updateApplication={() => {}}
            applications={mockApps}
          />
        </MockRouter>
      );

      wrapper.find('.application-form__delete-button').simulate('click');
      expect(deleteApplication).toBeCalled();
    });

    it('correctly renders existing company name, contact data, notes, and status when passed in', () => {
      const deleteApplication = jest.fn();
      const id = Date.now();
      const mockApps = [{
        company: 'Test',
        contact: 'Tester@testing.com',
        createdAt: id,
        state: [
          {
            status: 'Considering',
            notes: 'Hopeful on this one!',
            updated: id
          }
        ]
      }];
      const item = mockApps[0];
      const wrapper = mount(
        <MockRouter params={{ id }}>
          <ApplicationForm
            addApplication={() => {}}
            deleteApplication={deleteApplication}
            updateApplication={() => {}}
            applications={mockApps}
          />
        </MockRouter>
      );
      expect(wrapper.find('#company').props().value).toEqual(item.company);
      expect(wrapper.find('#contact').props().value).toEqual(item.contact);
      expect(wrapper.find('#status').props().value).toEqual(item.state[0].status);
      expect(wrapper.find('#notes').props().value).toEqual(item.state[0].notes);
    });
  });
});
