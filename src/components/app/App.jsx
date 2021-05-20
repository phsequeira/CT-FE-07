import React from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import JokePresentation from '../../presentation/jokePresentation';
import JokePunchline from '../../presentation/jokePunchline';

export default function App() {
  return (
    <Router>
      <Switch>
        <BrowserRouter>
          <Route exact path='/' component={JokePresentation} />
          <Route path='/:id' component={JokePunchline} />
        </BrowserRouter>
      </Switch>
    </Router>
  );
}
