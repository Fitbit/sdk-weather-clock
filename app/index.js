import document from "document";

import * as clock from "./clock";
import * as newfile from "./newfile";
import { toFahrenheit } from "../common/utils";
import { units } from "user-settings";

const time = document.getElementById("time");
const details = document.getElementById("details");

clock.initialize("minutes", data => {
  // clock ticked
  time.text = data.time;
});

newfile.initialize(data => {
  // fresh weather file received

  // If the user-settings temperature == F and the result data.unit == Celsius then we convert to Fahrenheit
  // Use this only if you use getWeatherData() function without the optional parameter.
  data = units.temperature === "F" ? toFahrenheit(data): data;

  details.text = `It's ${data.temperature}\u00B0 ${data.unit} and ${data.condition} (${data.conditionCode}) in ${data.location}`;

  clock.tick();
});
