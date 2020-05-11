import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from './home';
import React, {Component} from 'react';
import NotFound from './components/error/NotFound';


class App extends Component {

 render() {

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Home}/>
      <Redirect component={NotFound} />
    </Switch>
    </BrowserRouter>
  );

 }
}

export default App;