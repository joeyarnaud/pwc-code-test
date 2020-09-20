import React from 'react';
import { ThemeProvider } from 'styled-components';
import { WeatherProvider } from '../context/WeatherContext';
import { theme } from '../styledSetup';

// Wrapper for unit testing components
export const TestingWrapper = ({ children }) => (
  <WeatherProvider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </WeatherProvider>
);
