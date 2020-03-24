import React from 'react';
import Friends from './component/FriendsPage';
import Login from './component/Login';
import {Route, Link} from 'react-router-dom';
import {PrivateRoute} from './component/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Insta-Friends</h1>
      <Link to='/'>Login</Link>
      <Link to='/friends'>Friends List</Link>
      <Route exact path='/'component={Login}></Route>
      <PrivateRoute path='/friends'component={Friends}/>
    </div>
  );
}

export default App;
