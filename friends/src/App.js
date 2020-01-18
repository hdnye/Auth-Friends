import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsLIst';
import Login from './components/Login';


function App() {
  return (
   <Router>
    <div className="App">
      <header className="App-header">
        {/* <NavLink exact to='/login'>Login</NavLink> */}
        {/* <NavLink exact to='/friend-form'>Add Friend</NavLink> */}
        <Switch>
         <PrivateRoute exact path='/private' component={FriendsList} />
         <Route path='login' component={Login} />
        </Switch> 
      </header>
     </div>
    </Router> 
  );
}

export default App;
