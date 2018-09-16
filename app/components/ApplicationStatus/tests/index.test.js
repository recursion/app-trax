import React from 'react';
import { shallow } from 'enzyme';
import ApplicationStatus from '../ApplicationStatus';

const setup = (propOverrides) => {
  const props = Object.assign({
    app: {
      company: 'Test',
      contact: 'test',
      state: [{ status: 'Testing', notes: '' }],
      createdAt: Date.now(),
      id: 'lkjasdlf9109123lk109d'
    },
    update: jest.fn()
  }, propOverrides);

  const wrapper = shallow(<ApplicationStatus {...props} />);

  return {
    props,
    wrapper
  };
};


describe('ApplicationStatus', () => {
  it('renders a button', () => {
    const { wrapper } = setup();
    expect(wrapper.find('button').length).toEqual(1);
  });
});
