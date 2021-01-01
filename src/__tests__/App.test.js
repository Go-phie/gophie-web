/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import AppRoute from "../appRoute";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AppRoute />, div);
  ReactDOM.unmountComponentAtNode(div);
});
