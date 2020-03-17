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
import React, { useState } from 'react';
//import axios from 'axios';
import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';



const FriendForm = (props) => {
  const [addFriend, setAddFriend] = useState({
    id: new Date(),
    name: '',
    age: Number(),
    email: ''
})


    /*event handler for submit and handleChange*/

     const handleChange = e => {
       e.preventDefault();
       setAddFriend({
        ...addFriend,
        [e.target.name] : e.target.value
      })
     };            
      

     const handleSubmit = e => {
       console.log('submit');
        e.preventDefault();
         axiosWithAuth()
          .post(`/friends/`, addFriend)
          // , {
          //     method: 'PUT', 
          //     headers: { 'content-type' : 'application/json' },
          //     body: JSON.stringify(friends)
          //   }
          .then(res => {
            console.log(res.data);
            document.querySelector('form').reset();
            props.history.push('/friend-list');
          }) 
            .catch(err => console.log('not adding',err));
                                
     };


/**basic form to add new friends */
    
        return (
            <div>    
               <form onSubmit={handleSubmit}>
                 <label htmlFor='name'></label>
                   <input key={addFriend.id}
                     type='text'
                     name='name'
                     placeholder='Name'
                     value={addFriend.name}
                     onChange={handleChange}
                    /><br /> 
                 <label htmlFor='age'></label>
                   <input 
                     type='text'
                     name='age'
                     placeholder='Age'
                     value={addFriend.age}
                     onChange={handleChange}
                    /><br /> 
                  <label htmlFor='email'></label>
                   <input 
                     type='text'
                     name='email'
                     placeholder='Email'
                     value={addFriend.email}
                     onChange={handleChange}
                    /><br /> 
                 <button className='btn'>Add Friend!</button>
               </form>                          
            </div>
        )
    }


export default FriendForm;