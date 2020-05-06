import {Router} from '@reach/router';
import Home from './home';
import MovieDetail from './components/MovieDetail';
import React, {Component} from 'react';
import NotFound from './components/error/NotFound';


class App extends Component {

 render() {

  return (
    <Router>
      <Home path='/' />
      <MovieDetail path='/:Source/:Title'/>
      <NotFound default />
    </Router>
  );

 }
}

export default App;
