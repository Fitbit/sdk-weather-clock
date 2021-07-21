import document from "document";

import * as clock from "./clock";
import * as newfile from "./newfile";
import { tempCFConv } from "../common/utils";

const time = document.getElementById("time");
const details = document.getElementById("details");

clock.initialize("minutes", data => {
  // clock ticked
  time.text = data.time;
});

newfile.initialize(data => {
  // fresh weather file received

  // if user-settings temperature == F and the data.unit == Celsius then we convert to Fahrenheit
  // This use only if the getWeatherData() function we use without optional parameter.
  data = units.temperature == "F" ? tempCFConv(data): data;

  details.text = `It's ${data.temperature}\u00B0 ${data.unit} and ${data.condition} in ${data.location}`;
  clock.tick();
});
