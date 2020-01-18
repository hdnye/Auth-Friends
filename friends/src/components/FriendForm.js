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
import React, { Component } from 'react'

export default class FriendForm extends Component {
    state = {
       friend: { 
        id: new Date(),
        name: '',
        age: '',
        email: ''
    }};

    /*event handler for submit and changeHandler*/

     changeHandler = e => {
       e.preventDefault();
       this.setState({
           friend: {
               ...this.state.friend,
               [e.target.name]: e.target.value
           }
       });
     }; 

     handleSubmit = e => {
         e.preventDefault();
         this.setState(this.state.friend);
     };

/**basic form to add new friends */
    
    render() {
        return (
            <div>    
               <form onSubmit={this.handleSubmit}>
                 <label htmlFor='name'></label>
                   <input key={this.friend.id}
                     type='text'
                     name='name'
                     placeholder='Name'
                     value={this.friend.name}
                     onChange={this.changeHandler}
                    /> 
                 <label htmlFor='age'></label>
                   <input key={this.friend.id}
                     type='text'
                     name='age'
                     placeholder='Age'
                     value={this.friend.age}
                     onChange={this.changeHandler}
                    /> 
                  <label htmlFor='email'></label>
                   <input key={this.friend.id}
                     type='text'
                     name='email'
                     placeholder='Email'
                     value={this.friend.email}
                     onChange={this.changeHandler}
                    /> 
                 <button className='btn'>Add Friend!</button>
               </form>                          
            </div>
        )
    }
}
