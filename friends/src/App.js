import React from 'react';
import {  Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsLIst';
import Login from './components/Login';
import FriendForm from './components/FriendForm';

function App() {
  return (
    <div className="App">
      <h1>Hey Friends!</h1>
        <NavLink exact to='/'>Home</NavLink><br />
        <NavLink exact to='/login'>Login</NavLink><br />
        <NavLink exact to='/friend-form'>Add Friend</NavLink>
        <Switch>
          <PrivateRoute exact path='/private-route' component={FriendsList} 
           render={props => (
             <FriendsList {...props}
              friends={props.friend} />
           )} 
          />  
          <Route path='/login' component={Login} />
          <Route path='/friend-form' component={FriendForm} />        
         
        </Switch> 
      </div>
   );
}

export default App;
