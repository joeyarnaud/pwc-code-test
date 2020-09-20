import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SuperscriptCelcius, SuperscriptDegree } from './common';
import { convertToCelcius, convertToFahrenheit } from '../helpers/temp';

const TempContainer = styled.div`
  position: relative;
`;

const Temperature = styled.h2`
  position: relative;
  font-size: ${(props) => props.theme.fontSizes.fontXL};
  margin-top: 2rem;
`;

/**
 *
 * @param {*} props
 * @desc show formatted temperature with relavent units
 */
const Temp = (props) => {
  const { temp, metricUnits } = props;
  return (
    <TempContainer>
      {metricUnits
        ? Math.round(convertToCelcius(temp))
        : Math.round(convertToFahrenheit(temp))}
      <SuperscriptDegree>o</SuperscriptDegree>
      {metricUnits && <SuperscriptCelcius>C</SuperscriptCelcius>}
    </TempContainer>
  );
};

const TempLarge = (props) => {
  const { temp, metricUnits } = props;
  return (
    <Temperature>
      {metricUnits
        ? Math.round(convertToCelcius(temp))
        : Math.round(convertToFahrenheit(temp))}
      <SuperscriptDegree>o</SuperscriptDegree>
      {metricUnits && <SuperscriptCelcius>C</SuperscriptCelcius>}
    </Temperature>
  );
};

Temp.propTypes = {
  temp: PropTypes.number.isRequired,
  metricUnits: PropTypes.bool.isRequired,
};

TempLarge.propTypes = {
  temp: PropTypes.number.isRequired,
  metricUnits: PropTypes.bool.isRequired,
};

export { Temp, TempLarge };
