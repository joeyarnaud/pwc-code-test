import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FineDetailsContainer = styled.div`
  margin-top: 2rem;
`;

const Field = styled.p`
  color: ${(props) => props.theme.colors.colorGray};
  font-size: ${(props) => props.theme.fontSizes.fontSm};
`;

/**
 *
 * @param {*} props
 * @desc describes weather details such as windspeed and humidity
 */
const TodayFineDetails = (props) => {
  const { windSpeed, humidity } = props;
  return (
    <FineDetailsContainer>
      <Field>Wind Speed: {windSpeed} km/hr</Field>
      <Field>Humidity: {humidity}%</Field>
    </FineDetailsContainer>
  );
};

TodayFineDetails.propTypes = {
  windSpeed: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
};

export default TodayFineDetails;
