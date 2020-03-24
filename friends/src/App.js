import React from 'react';
import Friends from './component/Friends';
import Login from './component/Login';
import {Route, Link} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Insta-Friends</h1>
      <Link to='/'>Login</Link>
      <Link to='/friends'>Friends List</Link>
      <Route exact path='/'component={Login}></Route>
      <Route exact path='/friends'component={Friends}></Route>
    </div>
  );
}

export default App;
