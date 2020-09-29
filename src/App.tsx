import React from 'react'
import './App.scss';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductBrand from './pages/ProductBrand'

function App() {

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/product/:filter/:cat' component={ProductPage}/>
        <Route path='/product-brand/:brand' component={ProductBrand}/>
      </Switch>
    </div>
  );
}

export default App;
