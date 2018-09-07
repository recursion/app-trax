import React from 'react';
import { mount, shallow } from 'enzyme';
import ApplicationManager from '../ApplicationManager';

describe('ApplicationManager', () => {
  it('should render a create button', () => {
    const page = shallow(<ApplicationManager />);
    expect(page.find('.application-manager__button-create-new').length).toEqual(1);
  });
  it('should open a create form when creation button clicked', () => {
    const page = mount(<ApplicationManager />);
    page.find('.application-manager__button-create-new').simulate('click');
    expect(page.find('.new-app-form').length).toEqual(1);
  });
  it('should close a create form when already open and creation button clicked', () => {
    const page = mount(<ApplicationManager />);
    page.find('.application-manager__button-create-new').simulate('click');
    expect(page.find('.new-app-form').length).toEqual(1);
    page.find('.application-manager__button-create-new').simulate('click');
    expect(page.find('.new-app-form').length).toEqual(0);
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
