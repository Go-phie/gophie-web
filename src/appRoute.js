import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "./pages/home";
import React from "react";
import Terms from "./pages/terms";
import Shared from "./pages/shared";
import Music from "./pages/music";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/music" component={Music} />
        <Route path="/shared/:referralID" component={Shared} />
        <Route path="/terms" component={Terms} />
        <Route path="/search" component={Home} />
        <Route path="/(:engine)" component={Home} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoute;
