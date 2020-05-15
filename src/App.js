import { Switch, Redirect, Route } from "react-router-dom";
import Home from './home';
import React, {Component} from 'react';

class App extends Component {

 render() {

  return (
    <Switch>
      <Route path="/(:engine)" component={Home}/>
      <Route path="/" component={Home}/>
      <Redirect to="/" />
    </Switch>
  );

 }
}

export default App;