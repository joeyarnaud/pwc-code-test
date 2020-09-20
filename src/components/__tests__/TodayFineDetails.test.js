import React from 'react';
import { mount } from 'enzyme';
import TodayFineDetails from '../TodayFineDetails';
import { TestingWrapper } from '../../helpers/testing-helpers';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The TodayFineDetails Component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestingWrapper>
        <TodayFineDetails windSpeed={3.2} humidity={46} />
      </TestingWrapper>
    );
  });

  it('renders the windspeed and humidity correctly', () => {
    expect(wrapped.find('p').at(0).text()).toEqual('Wind Speed: 3.2 km/hr');
    expect(wrapped.find('p').at(1).text()).toEqual('Humidity: 46%');
  });
});
