import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const Container = styled.div``;

const LocationTitle = styled.h2`
  font-size: 3rem;
`;

const DateSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.colorGray};
`;

/**
 *
 * @param {*} props
 * @desc display the timezone and current date
 */
function TimeAndLocationSummary(props) {
  const { timezone } = props;

  return (
    <Container>
      <LocationTitle>{timezone}</LocationTitle>
      <DateSubtitle>{moment().format('dddd, MMMM Do')}</DateSubtitle>
    </Container>
  );
}

TimeAndLocationSummary.propTypes = {
  timezone: PropTypes.string.isRequired,
};

export default TimeAndLocationSummary;
