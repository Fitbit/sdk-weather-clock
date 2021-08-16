import document from "document";

import * as clock from "./clock";
import * as newfile from "./newfile";

const time = document.getElementById("time");
const details = document.getElementById("details");

clock.initialize("minutes", data => {
  // clock ticked
  time.text = data.time;
});

newfile.initialize(data => {
  // fresh weather file received
  details.text = `It's ${data.temperature}\u00B0 ${data.unit} and ${data.condition} (${data.conditionCode}) in ${data.location}`;
  clock.tick();
});
