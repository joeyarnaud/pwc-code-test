import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import WeatherContext from '../context/WeatherContext';
import Search from './Search';

const OptionsSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const ToggleButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  font-size: ${(props) => props.theme.fontSizes.fontMd};
`;

/**
 * @desc Component container for toggling the units and searching for cities
 */
const Options = () => {
  const { metricUnits, toggleCelcius, getForecastFromSearch } = useContext(
    WeatherContext
  );
  const [search, setSearch] = useState('');

  return (
    <OptionsSection>
      <Search
        label='Search City'
        placeholder='search city'
        handleChange={(e) => setSearch(e.target.value)}
        value={search}
        handleSubmit={(e) => {
          e.preventDefault();
          getForecastFromSearch(search);
        }}
      />
      {
        <ToggleButton onClick={() => toggleCelcius()}>
          {metricUnits ? 'Convert To Fahrenheit' : 'Convert To Celcius'}
        </ToggleButton>
      }
    </OptionsSection>
  );
};

export default Options;
