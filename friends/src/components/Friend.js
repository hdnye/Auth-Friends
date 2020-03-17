import React from 'react'

const Friend = ({ friend }) => {
    console.log('hello');
    return (
        <div className='friend'>
          <h2>{friend.name}</h2>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
        </div>
    )
}

export default Friend;