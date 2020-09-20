import React from 'react';
import { mount } from 'enzyme';
import TodayBroadDetails from '../TodayBroadDetails';
import { TestingWrapper } from '../../helpers/testing-helpers';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The TodayBroadDetails Component with metric units', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestingWrapper>
        <TodayBroadDetails
          temp={273.15}
          weather={[
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
          ]}
          metricUnits
        />
      </TestingWrapper>
    );
  });

  it('renders the description correctly', () => {
    expect(wrapped.find('p').text()).toEqual('light rain');
  });

  it('renders the temperature correctly', () => {
    expect(wrapped.find('h2').text()).toEqual('0oC');
  });

  it('has the correct image src', () => {
    expect(wrapped.find('img').props().src).toEqual(
      'http://openweathermap.org/img/wn/10d@2x.png'
    );
  });
});

describe('The TodayBroadDetails Component with metricUnits false', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestingWrapper>
        <TodayBroadDetails
          temp={273.15}
          weather={[
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
          ]}
          metricUnits={false}
        />
      </TestingWrapper>
    );
  });

  it('renders the temperature correctly', () => {
    expect(wrapped.find('h2').text()).toEqual('32o');
  });
});
