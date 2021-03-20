import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import AppRoute from "./appRoute";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toggle/style.css";

ReactDOM.render(<AppRoute />, document.getElementById("root"));

serviceWorker.unregister();
