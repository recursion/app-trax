import React from 'react';
import { MemoryRouter } from 'react-router';
import { shallow, mount } from 'enzyme';
import ApplicationItem from '../ApplicationItem';

const setup = (propOverrides) => {
  const props = Object.assign({
    app: {
      company: 'Test2',
      contact: 'test@test.com',
      state: [{ status: 'Applied', notes: 'Stuff' }],
      createdAt: Date.now(),
      id: 'lkj2s8lf9109123lk109d-alsd2333'
    },
    update: jest.fn()
  }, propOverrides);

  const wrapper = shallow(<ApplicationItem {...props} />);

  return {
    props,
    wrapper
  };
};

describe('ApplicationItem', () => {
  it('renders an ApplicationItem', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.application-item').length).toEqual(1);
  });

  it('shows no details by default', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.application-details').length).toEqual(0);
  });

  it('renders an expand button', () => {
    const { props } = setup();
    const wrapper = mount(<ApplicationItem {...props} />);
    expect(wrapper.find('.application-item__expand-button').length).toEqual(1);
  });

  it('expands the view when the expand button is clicked', () => {
    const { props } = setup();
    const wrapper = mount(
      <MemoryRouter>
        <ApplicationItem {...props} />
      </MemoryRouter>
    );
    expect(wrapper.find('.application-details').length).toEqual(0);
    wrapper.find('.application-item__expand-button').simulate('click');
    expect(wrapper.find('.application-details').length).toEqual(1);
  });

  it('minimizes the view when the collapse button is clicked', () => {
    const { props } = setup();
    const wrapped = mount(
      <MemoryRouter>
        <ApplicationItem {...props} />
      </MemoryRouter>
    );
    expect(wrapped.find('.application-details').length).toEqual(0);
    wrapped.find('.application-item__expand-button').simulate('click');
    expect(wrapped.find('.application-details').length).toEqual(1);
    wrapped.find('.application-item__expand-button').simulate('click');
    expect(wrapped.find('.application-details').length).toEqual(0);
  });
});
