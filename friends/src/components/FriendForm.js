// Create a form to collects data for a new friend.
// * Make a POST request to add a friend to the database
// * Each `friend` item that is in the `friends` array should have the following format:

// ```js
// {
//   id: 1
//   name: 'Joe',
//   age: 24,
//   email: 'joe@lambdaschool.com',
// }
// ```
import React, { Component } from 'react';
import axios from 'axios';


export default class FriendForm extends Component {
    constructor() {
        super();     
         this.state = {
            friend: { 
                id: new Date(),
                name: '',
                age: '',
                email: ''
        }};
    } 

    /*event handler for submit and changeHandler*/

     changeHandler = e => {
       e.preventDefault();
       this.setState({
         friend: {
           ...this.state.friends,         
            [e.target.name]: e.target.value          
         }});
     };            
      

     handleSubmit = e => {
         e.preventDefault();
         axios 
          .post(`http://localhost:5000/api/friends`, {
              method: 'POST', 
              headers: {
                  'content-type' : 'application/json'
              },
              body: JSON.stringify(this.state.friend)
            })
            this.setState({
              friend: {
                name: '',
                age: '',
                email: ''
              }
          })       
     };

/**basic form to add new friends */
    
    render() {
        return (
            <div>    
               <form onSubmit={this.handleSubmit}>
                 <label htmlFor='name'></label>
                   <input key={this.state.friend.id}
                     type='text'
                     name='name'
                     placeholder='Name'
                     value={this.state.friend.name}
                     onChange={this.changeHandler}
                    /><br /> 
                 <label htmlFor='age'></label>
                   <input 
                     type='text'
                     name='age'
                     placeholder='Age'
                     value={this.state.friend.age}
                     onChange={this.changeHandler}
                    /><br /> 
                  <label htmlFor='email'></label>
                   <input 
                     type='text'
                     name='email'
                     placeholder='Email'
                     value={this.state.friend.email}
                     onChange={this.changeHandler}
                    /><br /> 
                 <button className='btn'>Add Friend!</button>
               </form>                          
            </div>
        )
    }
}
