import React from 'react';
import { mount, shallow } from 'enzyme';
import ApplicationManager from '../ApplicationManager';

const setup = (propOverrides) => {
  const props = Object.assign({
    applications: [
      {
        company: 'Test',
        contact: 'test',
        state: [{ status: 'Testing', notes: '' }],
        createdAt: Date.now(),
        id: 'lkjasdlf9109123lk109d'
      },
      {
        company: 'Test2',
        contact: 'test@test.com',
        state: [{ status: 'Applied', notes: 'Stuff' }],
        createdAt: Date.now(),
        id: 'lkj2s8lf9109123lk109d-alsd2333'
      }
    ]
  }, propOverrides);

  const updateApplication = jest.fn();

  const wrapper = shallow(<ApplicationManager {...props} updateApplication={updateApplication} />);

  return {
    props,
    wrapper,
    updateApplication
  };
};

describe('ApplicationManager', () => {
  it('should not render an applications list when no applications exist', () => {
    const { wrapper } = setup({ applications: [] });
    expect(wrapper.find('applications-list').length).toEqual(0);
  });

  it('should render an applications list when applications exist', () => {
    const { updateApplication, props: { applications } } = setup();
    const wrapper = mount(
      <ApplicationManager
        applications={applications}
        updateApplication={updateApplication}
      />
    );
    expect(wrapper.find('.applications-list').length).toEqual(1);
  });

  describe('startUpdateItem', () => {
    it('should set showUpdateForm to true and item to the application item it was called with', () => {
      const { wrapper, props: { applications } } = setup();
      wrapper.instance().startUpdateItem(applications[0]);
      expect(wrapper.state('showUpdateForm')).toEqual(true);
      expect(wrapper.state('item')).toEqual(applications[0]);
    });
  });
  describe('finishUpdateItem', () => {
    it('should set showUpdateForm to false and item to null when called', () => {
      const { wrapper } = setup();
      wrapper.instance().finishUpdateItem();
      expect(wrapper.state('showUpdateForm')).toEqual(false);
      expect(wrapper.state('item')).toEqual(null);
    });
    it('does not call updateApplication when no item is passed in', () => {
      const { updateApplication, wrapper } = setup();
      wrapper.instance().finishUpdateItem();
      expect(updateApplication).not.toBeCalled();
    });

    it('should call updateApplication when an item is passed in', () => {
      const { updateApplication, wrapper, props: { applications } } = setup();
      const updatedItem = Object.assign(applications[0], {
        company: 'UpdatedName',
        contact: 'me@you.com'
      });
      wrapper.instance().finishUpdateItem(updatedItem);
      expect(wrapper.state('showUpdateForm')).toEqual(false);
      expect(wrapper.state('item')).toEqual(null);
      expect(updateApplication).toBeCalledWith(updatedItem);
    });
  });
});
