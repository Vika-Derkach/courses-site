import React from "react";
import { render } from "react-dom";
function Hi() {
  return <p>hi world</p>;
}
render(<Hi />, document.getElementById("app"));
