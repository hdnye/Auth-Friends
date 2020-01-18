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
        id: '',
        name: '',
        age: '',
        email: ''
    };
    /*event handler for submit and changeHandler*/
    

/**basic form to add new friends */
    
    render() {
        return (
            <div>    
               <form onSubmit={handleSubmit}>
                 <label htmlFor='name'></label>
                   <input key={friend.id}
                     type='text'
                     name='name'
                     placeholder='Name'
                     value={friend.name}
                     onChange={changeHandler}
                    /> 
                 <label htmlFor='age'></label>
                   <input key={id}
                     type='text'
                     name='age'
                     placeholder='Age'
                     value={friend.age}
                     onChange={changeHandler}
                    /> 
                  <label htmlFor='email'></label>
                   <input key={id}
                     type='text'
                     name='email'
                     placeholder='Email'
                     value={friend.email}
                     onChange={changeHandler}
                    /> 
                 <button className='btn'>Add Friend!</button>
               </form>                          
            </div>
        )
    }
}
