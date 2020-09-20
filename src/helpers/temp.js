// convert a temperature from kelvin to celcius
export const convertToCelcius = (temp) => temp - 273.15;

// convert a temperature from kelvin to fahrenheit
export const convertToFahrenheit = (temp) => ((temp - 273.15) * 9) / 5 + 32;
