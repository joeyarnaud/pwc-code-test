import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TempLarge } from './Temp';
import { FlexRow } from './common';
import { isEmpty } from '../helpers/is-empty';

const FlexRowMarginRight = styled(FlexRow)`
  margin-right: 10rem;
`;

const ForecastDescription = styled.p`
  font-size: ${(props) => props.theme.fontSizes.fontSm};
  color: ${(props) => props.theme.colors.colorGray};
  text-transform: capitalize;
`;

const ForecastIcon = styled.img`
  width: 5rem;
`;

/**
 *
 * @param {*} props
 * @desc displays the weather icon, description and temperature
 */
const TodayBroadDetails = (props) => {
  const { temp, weather, metricUnits } = props;

  return (
    <FlexRowMarginRight>
      {!isEmpty(weather) && (
        <div>
          <ForecastDescription>{weather[0].description}</ForecastDescription>
          <ForecastIcon
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          />
        </div>
      )}
      <TempLarge temp={temp} metricUnits={metricUnits} />
    </FlexRowMarginRight>
  );
};

TodayBroadDetails.propTypes = {
  temp: PropTypes.number.isRequired,
  weather: PropTypes.array.isRequired,
  metricUnits: PropTypes.bool.isRequired,
};

export default TodayBroadDetails;
