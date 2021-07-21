/**
 * Add zero in front of numbers < 10
 * @param {number} i
 */
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

/**
* Convert Celsius to Fahrenheit
* @param {object} data - WeatherData -
*/
export function toFahrenheit(data) {
  
  if (data.unit.toLowerCase() === "celsius") {
     data.temperature =  Math.round((data.temperature * 1.8)+32);
     data.unit = "Fahrenheit";
  }
  
  return data
}


