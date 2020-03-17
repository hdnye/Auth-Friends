// In your FriendsList component, rendered with `<ProtectedRoute />`, you will create a list of your friends that you get from the API.

import React, { Component } from 'react';
import Friend from './Friend';
import axios from 'axios';

export default class FriendsList extends Component {
     constructor(props) {
         super(props);
          this.state = { 
            friends: []
        };
} 

    componentDidMount() {   
      this.getData();
    }

    getData = () => {      
        axios
            .get(`http://localhost:5000/friends`)
            .then(res => res.json)
            .then(data => 
            this.setState({ friends: data }))
           .catch(err => 
                console.log('error', err));
   };


 render() {
      return (
         <div className='friendsList'>
           {this.state.friends.map(friend => (
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
  };
          
          
 
