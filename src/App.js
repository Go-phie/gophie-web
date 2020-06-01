import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from './home';
import React, {Component} from 'react';
import Terms from "./terms";

class App extends Component {

 render() {

  return (
    <HashRouter>
    <Switch>
      <Route path="/(:engine)" component={Home}/>
      <Route path="/" component={Home}/>
      <Route path='/terms' component={Terms} />
      <Redirect to="/" />
    </Switch>
    </HashRouter>
  );

 }
}

export default App;