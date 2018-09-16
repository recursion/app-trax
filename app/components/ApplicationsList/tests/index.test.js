import React from 'react';
import { mount, shallow } from 'enzyme';
import ApplicationsList from '../ApplicationsList';

const setup = (propOverrides) => {
  const props = Object.assign({
    apps: [
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
    ],
    update: jest.fn()
  }, propOverrides);

  const wrapper = shallow(<ApplicationsList {...props} />);

  return {
    props,
    wrapper
  };
};


describe('ApplicationsList', () => {
  it('renders an application-item for each application', () => {
    const { props } = setup();
    const wrapper = mount(<ApplicationsList {...props} />);
    expect(wrapper.find('.application-item').length).toEqual(2);
  });
});
