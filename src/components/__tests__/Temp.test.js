import React from 'react';
import { mount } from 'enzyme';
import { Temp, TempLarge } from '../Temp';
import { TestingWrapper } from '../../helpers/testing-helpers';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The Temp Component at 0 Celcius with metric units', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestingWrapper>
        <Temp temp={273.15} metricUnits />
      </TestingWrapper>
    );
  });

  it('renders the temperature correctly', () => {
    expect(wrapped.find('div').text()).toEqual('0oC');
  });
});

describe('The Temp Component at 0 Celcius with metricUnits set to false', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestingWrapper>
        <Temp temp={273.15} metricUnits={false} />
      </TestingWrapper>
    );
  });

  it('renders the temperature correctly', () => {
    expect(wrapped.find('div').text()).toEqual('32o');
  });
});

describe('The TempLarge Component at 0 Celcius with metric units', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestingWrapper>
        <TempLarge temp={273.15} metricUnits />
      </TestingWrapper>
    );
  });

  it('renders the temperature correctly', () => {
    expect(wrapped.find('h2').text()).toEqual('0oC');
  });
});

describe('The TempLarge Component at 0 Celcius with metricUnits set to false', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestingWrapper>
        <TempLarge temp={273.15} metricUnits={false} />
      </TestingWrapper>
    );
  });

  it('renders the temperature correctly', () => {
    expect(wrapped.find('h2').text()).toEqual('32o');
  });
});
