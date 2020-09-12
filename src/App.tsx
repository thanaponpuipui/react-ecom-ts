import React, { useEffect } from 'react';
import './App.scss';
import { Route } from 'react-router-dom'

import HomePage from './pages/HomePage';

function App() {
  useEffect(() => {
    document.title = 'Batadee - main'
  }, [])

  return (
    <div className='App'>
      <Route exact path='/' component={HomePage}/>
    </div>
  );
}

export default App;
