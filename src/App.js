import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from './home';
import React, {Component} from 'react';
import NavBar from './components/Navbar';
class App extends Component {

 render() {

  return (
    <BrowserRouter>
      < NavBar / >
      <Switch>
        <Route path="/" component={Home}/>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );

 }
}

export default App;