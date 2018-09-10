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

    it('adds a createdAt property to the object', () => {
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
      wrapper.find('#company').simulate('change', { target: { value: 'Test Company' } });
      wrapper.find('#contact').simulate('change', { target: { value: 'me@you.com' } });
      wrapper.find('.application-form__submit-button').simulate('click');
      expect('createdAt' in addMock.mock.calls[0][0]).toEqual(true);
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
    it('renders a delete button if an application was passed in', () => {
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

    it('does not overwrite an existing state array when updating the current state', () => {
      const deleteApplication = jest.fn();
      const updateMock = jest.fn();
      const id = Date.now();
      const mockApps = [{
        company: 'Test',
        contact: 'Tester@testing.com',
        createdAt: id,
        state: [
          {
            status: 'Considering',
            notes: 'Hopeful on this one!',
            updated: Date.parse('Dec 1, 2000')
          },
          {
            status: 'Considering',
            notes: 'Hopeful on this one!',
            updated: Date.parse('Dec 25, 1998')
          }
        ]
      }];
      const wrapper = mount(
        <MockRouter params={{ id }}>
          <ApplicationForm
            addApplication={() => {}}
            deleteApplication={deleteApplication}
            updateApplication={updateMock}
            applications={mockApps}
          />
        </MockRouter>
      );
      wrapper.find('.application-form__submit-button').simulate('click');
      expect(updateMock).toBeCalled();
      expect(updateMock.mock.calls[0][0].state.length).toEqual(2);
    });

    it('updates all changed fields successfully on edit', () => {
      const updateApplication = jest.fn();
      const id = Date.now();
      const mockApps = [{
        company: 'Test',
        contact: 'Tester@testing.com',
        createdAt: id,
        state: [
          {
            status: 'Applied',
            notes: 'Lets go for it!',
            updated: Date.parse('Dec 25, 1995')
          },
          {
            status: 'Considering',
            notes: 'Hopeful on this one!',
            updated: Date.parse('Dec 12, 1990')
          }
        ]
      }];
      const wrapper = mount(
        <MockRouter params={{ id }}>
          <ApplicationForm
            addApplication={() => {}}
            deleteApplication={() => {}}
            updateApplication={updateApplication}
            applications={mockApps}
          />
        </MockRouter>
      );
      wrapper.find('#company').simulate('change', { target: { value: 'FU' } });
      wrapper.find('#contact').simulate('change', { target: { value: 'me@you.com' } });
      wrapper.find('#status').simulate('change', { target: { value: 'Offer Accepted' } });
      wrapper.find('#notes').simulate('change', { target: { value: 'Hope this works out' } });
      wrapper.find('.application-form__submit-button').simulate('click');

      expect(updateApplication).toBeCalled();
      expect(updateApplication.mock.calls[0][0].company).toEqual('FU');
      expect(updateApplication.mock.calls[0][0].contact).toEqual('me@you.com');
      expect(updateApplication.mock.calls[0][0].state.length).toEqual(2);
      expect(updateApplication.mock.calls[0][0].state[0].status).toEqual('Offer Accepted');
      expect(updateApplication.mock.calls[0][0].state[0].notes).toEqual('Hope this works out');
    });
  });
});
