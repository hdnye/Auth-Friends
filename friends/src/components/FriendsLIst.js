// In your FriendsList component, rendered with `<ProtectedRoute />`, you will create a list of your friends that you get from the API.

import React, { Component } from 'react';
import axiosWithAuth from './axiosWithAuth';


 class FriendsList extends Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth
         .get('/api/friends', {headers: 
            { Authorization: localStorage.getItem('token')}})
         .then(res => {
            console.log(res.data)
         })
         .catch(err => 
            console.log('error', err));
    };
 
 render() {
     return (
         <div className='friendsList'>
            {this.state.friends.map(friend => (
                <div key={friend.id}></div>
            ))} 
        </div>
      )
    } 
 }


export default FriendsList;