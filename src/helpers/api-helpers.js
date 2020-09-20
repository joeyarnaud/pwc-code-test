// put the search and api key into the url
export const resolveSearch = (search) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_API_KEY}`;

// put coordinates and key into the url
export const resolveCoords = ({ lat, lon }) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${process.env.REACT_APP_API_KEY}`;
