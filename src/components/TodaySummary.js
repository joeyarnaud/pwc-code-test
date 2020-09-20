import React, { useContext } from 'react';
import styled from 'styled-components';
import WeatherContext from '../context/WeatherContext';
import TimeAndLocationSummary from './TimeAndLocationSummary';
import TodayFineDetails from './TodayFineDetails';
import TodayBroadDetails from './TodayBroadDetails';
import { FlexRow, Loading } from './common';
import { isEmpty } from '../helpers/is-empty';

const TodaySummaryContainer = styled.section`
  margin-bottom: 2rem;
`;

/**
 * Summary of the current weather data in the selected location
 */
const TodaySummary = () => {
  const { current, timezone, metricUnits } = useContext(WeatherContext);

  return !isEmpty(current) ? (
    <TodaySummaryContainer>
      <TimeAndLocationSummary timezone={timezone} />
      <FlexRow>
        <TodayBroadDetails
          metricUnits={metricUnits}
          temp={current.temp}
          weather={current.weather}
        />
        <TodayFineDetails
          windSpeed={current.wind_speed}
          humidity={current.humidity}
        />
      </FlexRow>
    </TodaySummaryContainer>
  ) : (
    <Loading>Loading... </Loading>
  );
};

export default TodaySummary;
