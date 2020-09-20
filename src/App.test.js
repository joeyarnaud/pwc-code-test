import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Options from './components/Options';
import { TestingWrapper } from './helpers/testing-helpers';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The App Component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestingWrapper>
        <App />
      </TestingWrapper>
    );
  });

  it('renders the options component', () => {
    expect(wrapped.find(Options).length).toEqual(1);
  });

  it('renders a geolocation error', () => {
    expect(wrapped.find('div').at(1).text()).toEqual(
      'Geolocation not available'
    );
  });
});
