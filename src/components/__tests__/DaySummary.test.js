import React from 'react';
import { mount } from 'enzyme';
import DaySummary from '../DaySummary';
import { Temp } from '../Temp';
import { TestingWrapper } from '../../helpers/testing-helpers';
import { convertToCelcius, convertToFahrenheit } from '../../helpers/temp';

let wrapped;

const time = 1600480800;
const min = 289.19;
const max = 295.2;

afterEach(() => {
  wrapped.unmount();
});

describe('The DaySummary component with all needed props and true metric units', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestingWrapper>
        <DaySummary
          dt={time}
          temp={{ min: min, max: max }}
          weather={[
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
          ]}
          metricUnits
        />
      </TestingWrapper>
    );
  });

  it('Renders the time correctly', () => {
    expect(wrapped.find('h3').text()).toEqual('Saturday');
  });

  it('Renders the temperature divs', () => {
    expect(wrapped.find(Temp).length).toEqual(2);
  });

  it('Renders the temperature correctly', () => {
    expect(wrapped.find(Temp).at(0).text()).toEqual(
      `${Math.round(convertToCelcius(max))}oC`
    );
    expect(wrapped.find(Temp).at(1).text()).toEqual(
      `${Math.round(convertToCelcius(min))}oC`
    );
  });

  it('Has the correct image src', () => {
    expect(wrapped.find('img').props().src).toEqual(
      'http://openweathermap.org/img/wn/10d@2x.png'
    );
  });
});

describe('The DaySummary component with all needed props and false metric units', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestingWrapper>
        <DaySummary
          dt={time}
          temp={{ min: min, max: max }}
          weather={[
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
          ]}
          metricUnits={false}
        />
      </TestingWrapper>
    );
  });

  it('Renders the time correctly', () => {
    expect(wrapped.find('h3').text()).toEqual('Saturday');
  });

  it('Renders the temperature divs', () => {
    expect(wrapped.find(Temp).length).toEqual(2);
  });

  it('Renders the temperature correctly', () => {
    expect(wrapped.find(Temp).at(0).text()).toEqual(
      `${Math.round(convertToFahrenheit(max))}o`
    );
    expect(wrapped.find(Temp).at(1).text()).toEqual(
      `${Math.round(convertToFahrenheit(min))}o`
    );
  });

  it('Has the correct image src', () => {
    expect(wrapped.find('img').props().src).toEqual(
      'http://openweathermap.org/img/wn/10d@2x.png'
    );
  });
});
