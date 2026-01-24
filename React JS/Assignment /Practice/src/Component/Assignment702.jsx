import React, { useState } from 'react'

export default function Assignment702() {
    const [users]=useState([
        {id: 1 , name:"uday"},
        {id: 2 , name:"parmar"} 
    ])
  return (
    <div>
      <h1>User Lists</h1>
      <ul>
        {users.map(user => (

          <li key={user.id}>
            id : {user.id} <br /> name : {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
