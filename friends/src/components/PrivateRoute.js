// Create a `<PrivateRoute />` component to protect your other routes. It should check localStorage for a token, and redirect the user to your login route if there is not a token.

// * Create a protected route for your friends list. Remember, if the user isn't logged in, navigating to this protected route will redirect them to the login page.

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({ component: Component, ...rest}) {
   // let loggedIn = localStorage.getItem('token');

    return (
        <Route 
         {...rest}
        //    {/* {loggedIn ? <Component /> : <Redirect to='login' />} */}
           render={props => {
               if(localStorage.getItem('token')) {
                   return <Component {...props} />
                } else {
                    return <Redirect to='/login' />
                }
           }}
        />   
    );
};

