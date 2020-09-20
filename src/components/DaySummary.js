import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { Temp } from './Temp';
import { isEmpty } from '../helpers/is-empty';

const DayContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const DayTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.fontMd};
`;

const Icon = styled.img``;

const Temps = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: ${(props) => props.theme.fontSizes.fontSm};
`;

/**
 *
 * @param {*} props
 * @desc Summarises the weather on a day of the week
 */
const DaySummary = (props) => {
  const { dt, temp, weather, metricUnits } = props;

  return (
    <DayContainer>
      <DayTitle>{moment(dt * 1000).format('dddd')}</DayTitle>
      {!isEmpty(weather) && (
        <Icon
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        />
      )}
      {!isEmpty(temp) && (
        <Temps>
          <Temp temp={temp.max} metricUnits={metricUnits} />
          <Temp temp={temp.min} metricUnits={metricUnits} />
        </Temps>
      )}
    </DayContainer>
  );
};

DaySummary.propTypes = {
  dt: PropTypes.number.isRequired,
  temp: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
  weather: PropTypes.array.isRequired,
  metricUnits: PropTypes.bool.isRequired,
};

export default DaySummary;
