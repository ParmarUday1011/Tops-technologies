import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [user , setUser] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.log(err))
    },[])
  return (
    <div>
      <h2>All Data</h2>
        {user.map((item) => {
            return(
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.email}</p>
                </div>
            )
        })}
    </div>
  )
}
