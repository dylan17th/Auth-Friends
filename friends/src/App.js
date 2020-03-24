import React from 'react';
import Friends from './component/FriendsPage';
import Login from './component/Login';
import {Route, Link} from 'react-router-dom';
import {PrivateRoute} from './component/PrivateRoute';

import './App.css';

function App() {
  const handleLogout = () => {
   localStorage.clear('token')
  }
  return (
    <div className="App">
       <div className='nav'>
        <h1 className='title'>Insta-Friends</h1>
        <div className='links'>
            <Link className='link' to='/'>Login</Link>
            <Link className='link' to='/friends'>Friends List</Link>
            <Link onClick={handleLogout}className='link' to='/'>Logout</Link>
          </div>
      </div>
      <Route className='body' exact path='/'component={Login}></Route>
      <PrivateRoute className='body'path='/friends'component={Friends}/>
    </div>
  );
}

export default App;
