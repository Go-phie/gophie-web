import { BrowserRouter, HashRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "./pages/home";
import React from "react";
import Terms from "./pages/terms";
import Shared from "./pages/shared";
import Music from "./pages/music";

const getRouter = () => {
  let router = BrowserRouter
  if (window.location.host === "netlify.app"){
    router = HashRouter 
  }
  return router
}

const AppRoute = () => {
  const Router = getRouter()

  return (
    <Router>
      <Switch>
        <Route path="/music" component={Music} />
        <Route path="/shared/:referralID" component={Shared} />
        <Route path="/terms" component={Terms} />
        <Route path="/search" component={Home} />
        <Route path="/(:engine)" component={Home} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRoute;
