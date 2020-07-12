import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "./pages/home";
import React, { Component } from "react";
import Terms from "./pages/terms";
import Shared from "./pages/shared";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/shared/:referralID" component={Shared} />
          <Route path="/terms" component={Terms} />
          <Route path="/(:engine)" component={Home} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
