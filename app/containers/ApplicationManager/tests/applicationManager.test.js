import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import ApplicationManager from '../ApplicationManager';

describe('ApplicationManager', () => {
  it('should render a router link', () => {
    const wrapper = mount(
      <MemoryRouter>
        <ApplicationManager updateApplication={() => {}} />
      </MemoryRouter>
    );
    expect(wrapper.exists('.create-new-button')).toEqual(true);
  });
});
/*
  it('should open a create form when creation button clicked', () => {
    const page = mount(<ApplicationManager />);
    page.find('.application-manager__button-create-new').simulate('click');
    expect(page.find('.application-form').length).toEqual(1);
  });

  it('should close a create form when already open and creation button clicked', () => {
    const page = mount(<ApplicationManager />);
    page.find('.application-manager__button-create-new').simulate('click');
    expect(page.find('.application-form').length).toEqual(1);
    page.find('.application-manager__button-create-new').simulate('click');
    expect(page.find('.application-form').length).toEqual(0);
  });

  it('should not render an applications list when no applications exist', () => {
    const page = mount(<ApplicationManager applications={[]} />);
    expect(page.find('applications-list').length).toEqual(0);
  });

  it('should render an applications list when applications exist', () => {
    const page = mount(<ApplicationManager
      applications={[
        {
          company: 'Test',
          contact: 'test',
          state: [{ status: 'Testing', notes: '' }],
          createdAt: Date.now()
        }
      ]}
    />);
    expect(page.find('.applications-list').length).toEqual(1);
  });
});

  describe('Editing', () => {
    it('should set item to null when cancel/close is clicked', () => {
      const item = {
        company: 'Test',
        contact: 'testee@testers.com',
        state: [{ status: 'Considering', notes: '' }]
      };
      const wrapper = mount(<ApplicationManager />);
      wrapper.instance().startEditItem(item);
      expect(wrapper.state('item')).toEqual(item);
      wrapper.find('.application-manager__button-create-new').simulate('click');
      expect(wrapper.state('item')).toEqual(null);
    });

    describe('::startEditItem', () => {
      it('should initiate an edit action', () => {
        const item = {
          company: 'Test',
          contact: 'testee@testers.com',
          state: [{ status: 'Considering', notes: '' }]
        };
        const wrapper = shallow(<ApplicationManager />);
        wrapper.instance().startEditItem(item);
        expect(wrapper.state('showApplicationForm')).toEqual(true);
        expect(wrapper.state('editing')).toEqual(true);
        expect(wrapper.state('item')).toEqual(item);
      });
    });

    describe('delete', () => {
      it('should call props.deleteItem with the item in state', () => {
        const deleteItem = jest.fn();
        const updateApplication = jest.fn();
        const item = {
          company: 'Test',
          contact: 'testee@testers.com',
          state: [{ status: 'Rejected', notes: 'bummer' }, { status: 'Applied', notes: '' }]
        };
        const wrapper = shallow(<ApplicationManager deleteApplication={deleteItem} updateApplication={updateApplication} />);
        wrapper.instance().startEditItem(item);
        wrapper.instance().delete();
        expect(deleteItem).toBeCalledWith(item);
      });

      it('should set showApplicationForm to false, item to null, and editing to false', () => {
        const deleteItem = jest.fn();
        const updateApplication = jest.fn();
        const item = {
          company: 'Test',
          contact: 'testee@testers.com',
          state: [{ status: 'Rejected', notes: 'bummer' }, { status: 'Applied', notes: '' }]
        };
        const wrapper = shallow(<ApplicationManager deleteApplication={deleteItem} updateApplication={updateApplication} />);
        wrapper.instance().startEditItem(item);
        wrapper.instance().delete();
        expect(wrapper.state('showApplicationForm')).toEqual(false);
        expect(wrapper.state('item')).toEqual(null);
        expect(wrapper.state('editing')).toEqual(false);
      });
    });

    describe('::edit', () => {
      it('should update an edited record, set editing to false, and item to null', () => {
        const updateApplication = jest.fn();
        const item = {
          company: 'Test',
          contact: 'testee@testers.com',
          state: [{ status: 'Rejected', notes: 'bummer' }, { status: 'Applied', notes: '' }]
        };
        const editedRecord = {
          company: 'Tested',
          contact: 'testee@testers.com',
          state: [{ status: 'Accepted', notes: 'awesome!' }]
        };
        const expectedRecord = {
          company: 'Tested',
          contact: 'testee@testers.com',
          state: [{ status: 'Accepted', notes: 'awesome!' }, { status: 'Applied', notes: '' }]
        };
        const wrapper = shallow(<ApplicationManager updateApplication={updateApplication} />);
        wrapper.instance().startEditItem(item);
        wrapper.instance().edit(editedRecord);
        expect(wrapper.state('editing')).toEqual(false);
        expect(wrapper.state('item')).toEqual(null);
        expect(updateApplication).toBeCalledWith(expectedRecord);
      });
    });
  });
});
*/
