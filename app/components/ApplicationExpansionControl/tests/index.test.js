import React from 'react';
import { shallow } from 'enzyme';
import ApplicationExpansionControl from '../ApplicationExpansionControl';

describe('ApplicationExpansionControl', () => {
  it('renders a plus button when not expanded', () => {
    const toggle = jest.fn();
    const wrapper = shallow(
      <ApplicationExpansionControl
        expanded={false}
        toggleExpand={toggle}
      />
    );
    expect(wrapper.find('.fa-expand-arrows-alt').length).toEqual(1);
  });
});
