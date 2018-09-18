import React from 'react';
import { shallow } from 'enzyme';
import ApplicationHistory from '../ApplicationHistory';

const setup = (propOverrides) => {
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
      },
      {
        company: 'Test4',
        contact: '',
        state: [{ status: 'Applied', notes: 'Stuff', updated: Date.now() }],
        createdAt: Date.now(),
        id: 'l281-23lk109d-alsd2333'
      }
    ],
    close: jest.fn(),
  }, propOverrides);

  const wrapper = shallow(<ApplicationHistory {...props} />);

  return {
    wrapper,
    props
  };
};

describe('ApplicationHistory', () => {
  it('renders an application history when found', () => {
    const { wrapper } = setup({ id: 'lkjasdlf9109123lk109d' });
    expect(wrapper.exists('.application-history')).toEqual(true);
  });
  it('does not render a contact div when none exists', () => {
    const { wrapper } = setup({ id: 'l281-23lk109d-alsd2333' });
    expect(wrapper.exists('.application-history__contact')).toEqual(false);
  });
  it('does render a contact div when one exists', () => {
    const { wrapper } = setup({ id: 'lkjasdlf9109123lk109d' });
    expect(wrapper.exists('.application-history__contact')).toEqual(true);
  });
});
