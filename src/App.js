import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './redux/store';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Team from './components/Team';

import { ADD_TO_TEAM } from './redux/actions/types';

if (localStorage.pokeApp) {
  const data = JSON.parse(localStorage.getItem('pokeApp'));
  data.forEach((url) => {
    store.dispatch({
      type: ADD_TO_TEAM,
      payload: url,
    });
  });
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/myteam" component={Team} />
    </Router>
  </Provider>
);

export default App;
