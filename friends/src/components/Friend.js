import React from 'react'

export default function Friend(props) {
    return (
        <div>
          <h2>{props.data.name}</h2>
            <p>{props.data.age}</p>
            <p>{props.data.email}</p>
        </div>
    )
}
