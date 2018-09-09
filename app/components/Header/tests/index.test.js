import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import Header from '../Header';

describe('<Header />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(renderedComponent.length).toEqual(1);
  });
  it('should render a router-link', () => {
    const renderedComponent = mount(
      <MemoryRouter>
        <Header location={{ pathname: '/' }} />
      </MemoryRouter>
    );
    expect(renderedComponent.exists('.router-link')).toEqual(true);
  });
});
