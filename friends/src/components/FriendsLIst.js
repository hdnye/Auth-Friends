// In your FriendsList component, rendered with `<ProtectedRoute />`, you will create a list of your friends that you get from the API.

import React, { useState, useEffect } from 'react';
import Friend from './Friend';
import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';

const FriendList = props => {

  // componentDidMount() { 
    //   console.log('data');  
    //   this.getData();
    // }

   useEffect(()  => {
          axiosWithAuth()
            .get("http://localhost:5000/api/friends")
           // .then(res => res.json)
            .then(res => 
               console.log(res.data))           
            .catch(err => 
                console.log('error', err));
   }, []);


 
      return (
         <div className='friendsList'>
           {props.friends && props.friends.map(friend => (
              <Friend key={friend.id} data={friend} />
              // <div> 
              //   <FriendForm /> </div> 
              //  <div> <h2>Friend List</h2>
              //   <p>{friend.name}</p>
              //   <p>{friend.age}</p>
              //   <p>{friend.email}</p> 
              // </div>  
              ))}   
         </div>
       );
    } 
  
    export default FriendList;
          
          
 
