// The login function should save the returned token to localStorage. You can setup `isLoading` state in your Login component, and show a spinner on your form or in your button while the login request is happening.

// * When the request returns, save the token to `localStorage`, then use the history object in your Login component to navigate your user to your FriendsList route
import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
     state = {
        credentials: {
            username: 'lambda',
            password: 'school'
        }
    };

    login = e => {
      e.preventDefault();
      axios
       .post(`http://localhost:5000/api/login`, this.state.credentials)
       .then(res => {
           localStorage.setItem(
            'token', res.data.payload)
        })
        .catch(err => 
            console.log('Username or Password incorrect. Please see Readme', err));
    };


    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name] : e.target.value
            }
        });
    };

    render() {
        return (
            <div className='form'>
               <form onSubmit={this.login}>
                 <label htmlFor='login'></label>   
                  <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={this.state.credentials.username}
                    onChange={this.handleChanges}
                  />  
                  <input
                    type='text'
                    name='password'
                    placeholder='Password'
                    value={this.state.credentials.password}
                    onChange={this.handleChanges}
                  />     
                 <button className='btn'>Log In</button>
              </form>
            </div>
        );
    }
}
