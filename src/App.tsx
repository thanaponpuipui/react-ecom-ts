import React, { useEffect } from 'react'
import './App.scss';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function App() {
  useEffect(() => {
    document.title = 'Bathadee - main'
  }, [])

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/product/:g/:cat' component={ProductPage}/>
      </Switch>
    </div>
  );
}

export default App;
