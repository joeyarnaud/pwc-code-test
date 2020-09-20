import React, { useReducer } from 'react';
import axios from 'axios';
import { SET_API_DATA, TOGGLE_CELCIUS, SET_ERROR } from '../helpers/types';
import { resolveCoords, resolveSearch } from '../helpers/api-helpers';

const reducer = (state, action) => {
  switch (action.type) {
    // set data from a call to the Onecall openweather api
    case SET_API_DATA:
      return {
        ...state,
        current: action.payload.current,
        daily: action.payload.daily,
        timezone: action.payload.timezone,
        error: '',
      };
    case TOGGLE_CELCIUS:
      return {
        ...state,
        metricUnits: !state.metricUnits,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const WeatherContext = React.createContext();

const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    current: {},
    daily: [],
    metricUnits: true,
    timezone: '',
    error: '',
  });

  // set data in the global context
  const setApiData = (data) => dispatch({ type: SET_API_DATA, payload: data });

  // make a call to the api using the coordinates
  const getForecastFromCoordinates = (coords) => {
    axios
      .get(resolveCoords(coords))
      .then((res) => setApiData(res.data))
      .catch((err) =>
        dispatch({ type: SET_ERROR, payload: 'Something Went Wrong!' })
      );
  };

  /**
   * get the coordinates of a location from the name of the location
   * this work around isn't ideal, with a paid version of open weather
   * i would use the 16 day forcast api call
   */
  const getForecastFromSearch = (search) => {
    axios
      .get(resolveSearch(search))
      .then((res) => getForecastFromCoordinates(res.data.coord))
      .catch((err) =>
        dispatch({ type: SET_ERROR, payload: 'Region not found!' })
      );
  };

  // Get the users geolocation and if you can get it make a call to the Api
  const getWeatherFromCurrentPosition = () => {
    // check if the users browser has geolocation
    if ('geolocation' in navigator) {
      // get users position geolocation
      navigator.geolocation.getCurrentPosition(
        (position) =>
          getForecastFromCoordinates({
            lon: position.coords.longitude,
            lat: position.coords.latitude,
          }),
        (err) =>
          dispatch({ type: SET_ERROR, payload: "Couldn't get geolocation" })
      );
    } else {
      dispatch({ type: SET_ERROR, payload: 'Geolocation not available' });
    }
  };

  const toggleCelcius = () => dispatch({ type: TOGGLE_CELCIUS });

  return (
    <WeatherContext.Provider
      value={{
        current: state.current,
        daily: state.daily,
        timezone: state.timezone,
        metricUnits: state.metricUnits,
        error: state.error,
        getWeatherFromCurrentPosition,
        toggleCelcius,
        setApiData,
        getForecastFromSearch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
export default WeatherContext;
