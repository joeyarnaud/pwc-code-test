import React from 'react';
import { mount } from 'enzyme';
import TodaySummary from '../TodaySummary';
import TimeAndLocationSummary from '../TimeAndLocationSummary';
import TodayFineDetails from '../TodayFineDetails';
import TodayBroadDetails from '../TodayBroadDetails';
import { TestingWrapper } from '../../helpers/testing-helpers';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

// describe('The TodaySummary Component with current data', () => {
//   beforeEach(() => {
//     wrapped = mount(
//       <TestingWrapper
//         value={{
//           current: {
//             weather: [
//               { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
//             ],
//             temp: 294.74,
//             wind_speed: 0.89,
//             humidity: 62,
//           },
//           timezone: 'Australia/Melbourne',
//           metricUnits: true,
//         }}
//       >
//         <TodaySummary />
//       </TestingWrapper>
//     );
//   });

//   it('renders correct components', () => {
//     console.log(wrapped.text());
//     expect(wrapped.find(TimeAndLocationSummary).length).toEqual(1);
//     expect(wrapped.find(TodayFineDetails).length).toEqual(1);
//     expect(wrapped.find(TodayBroadDetails).length).toEqual(1);
//   });
// });

describe('The TodaySummary Component with current data', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestingWrapper>
        <TodaySummary />
      </TestingWrapper>
    );
  });

  it('renders loading correctly', () => {
    expect(wrapped.find('div').text()).toEqual('Loading... ');
  });
});
