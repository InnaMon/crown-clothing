import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/SignInAndSignUp';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
