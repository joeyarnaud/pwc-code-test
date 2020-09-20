import React from 'react';
import { mount } from 'enzyme';
import Days from '../Days';
import DaySummary from '../DaySummary';
import WeatherContext, { WeatherProvider } from '../../context/WeatherContext';
import { mockDaily } from '../../helpers/testing-helpers';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The days component without days', () => {
  beforeEach(() => {
    wrapped = mount(
      <WeatherProvider>
        <Days />
      </WeatherProvider>
    );
  });

  it('renders no day summaries', () => {
    expect(wrapped.find('div').length).toEqual(0);
  });

  it('renders the days component', () => {
    expect(wrapped.find(Days).length).toEqual(1);
  });
});

// describe('The days components with days of weather', () => {
//   beforeEach(() => {
//     const contextValues = { daily: mockDaily, metricUnits: true };
//     jest
//       .spyOn(WeatherContext, 'useContext')
//       .mockImplementation(() => contextValues);
//     wrapped = mount(
//       <WeatherProvider>
//         <Days />
//       </WeatherProvider>
//     );
//   });

//   it('Renders 7 day summaries', () => {
//     console.log(wrapped.find('div'));
//     expect(wrapped.find(DaySummary).length).toEqual(7);
//   });
// });
