/**
 * Test the ApplicationManager Page
 */

import React from 'react';
import { shallow } from 'enzyme';
import NewApplicationForm from 'components/NewApplicationForm';

import ApplicationManager from '../ApplicationManager';

// import { mapDispatchToProps } from '../index';
// import { toggleNewApplicationInput } from '../actions';
// import { addApplication } from '../../App/actions';

describe('<HomePage />', () => {
  it('should render a + button when showNewInputApplication is false', () => {
    const renderedComponent = shallow(
      <ApplicationManager showNewApplicationInput={false} />
    );
    expect(renderedComponent.find('.btn-new').length).toEqual(1);
  });
  it('should not render a new application form when showNewApplicationInput is false', () => {
    const renderedComponent = shallow(
      <ApplicationManager showNewApplicationInput={false} />
    );
    expect(renderedComponent.contains(<NewApplicationForm />)).toEqual(false);
  });
  it('should render an application from when showNewApplicationInput is true', () => {
    const renderedComponent = shallow(
      <ApplicationManager showNewApplicationInput />
    );
    expect(renderedComponent.contains(<NewApplicationForm />)).toEqual(true);
  });
});
