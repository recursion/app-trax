import React from 'react';
import { mount } from 'enzyme';
import ApplicationManager from '../ApplicationManager';

describe('ApplicationManager', () => {
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
          createdAt: Date.now(),
          id: 'lkjasdlf9109123lk109d'
        }
      ]}
    />);
    expect(page.find('.applications-list').length).toEqual(1);
  });
});
