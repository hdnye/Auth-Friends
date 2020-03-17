// The login function should save the returned token to localStorage. You can setup `isLoading` state in your Login component, and show a spinner on your form or in your button while the login request is happening.

// * When the request returns, save the token to `localStorage`, then use the history object in your Login component to navigate your user to your FriendsList route
import React, { useState } from 'react';
//import axiosWithAuth from './axiosWithAuth';
import axios from 'axios';


const Login = props => {
  const [data, setData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = e => {
    e.preventDefault();
    console.log('here');
    axios
      .post("http://localhost:5000/api/login", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/friend-list');
      })
    .catch(err => {
      console.log('Log In Failed', err)
    });
  }

    const handleChanges = e => {
        e.preventDefault();
        setData({
          ...data,
          [e.target.name] : e.target.value
        })
    };

    
        return (                   
            <div className='form'> 
               <form onSubmit={handleSubmit}>
                 <label htmlFor='login'></label>   
                  <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={data.username}
                    onChange={handleChanges}
                  />  
                  <input
                    type='text'
                    name='password'
                    placeholder='Password'
                    value={data.password}
                    onChange={handleChanges}
                  />     
                 <button className='btn'>Log In</button>
              </form>
            </div>
         );
       }

export default Login;