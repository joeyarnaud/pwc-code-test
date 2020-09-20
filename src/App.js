import React, { useEffect, useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import WeatherContext from './context/WeatherContext';
import { GlobalStyle, theme } from './styledSetup';
import TodaySummary from './components/TodaySummary';
import Days from './components/Days';
import Options from './components/Options';
import { Error } from './components/common';

const AppContainer = styled.div`
  position: relative;
  padding: 2rem;
`;

function App() {
  const { getWeatherFromCurrentPosition, error } = useContext(WeatherContext);

  useEffect(getWeatherFromCurrentPosition, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Options />
          {error ? (
            <Error>{error}</Error>
          ) : (
            <>
              <TodaySummary />
              <Days />
            </>
          )}
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
