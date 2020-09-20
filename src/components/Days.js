import React, { useContext } from 'react';
import styled from 'styled-components';
import WeatherContext from '../context/WeatherContext';
import DaySummary from './DaySummary';
import { isEmpty } from '../helpers/is-empty';

const DaysContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

/**
 * @desc container for summaries of the days of the week
 */
const Days = () => {
  const { daily, metricUnits } = useContext(WeatherContext);

  return (
    <DaysContainer>
      {!isEmpty(daily) &&
        daily.map((day, index) => {
          // Only render 7 of the DaySummaries (api gives 8)

          return index >= 7 ? null : (
            <DaySummary
              key={day.dt}
              dt={day.dt}
              temp={day.temp}
              weather={day.weather}
              metricUnits={metricUnits}
            />
          );
        })}
    </DaysContainer>
  );
};

export default Days;
