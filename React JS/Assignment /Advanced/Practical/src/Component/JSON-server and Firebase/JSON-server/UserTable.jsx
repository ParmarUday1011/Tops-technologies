import React, { useEffect, useState } from 'react'

export default function UserTable() {
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>{
            setUser(data)
            setLoading(false)
        })
        .catch((err)=>{
            console.log("error",err);
            setLoading(false)
        })
    },[])

    if (loading) return <h1>Wait Data Is Loading...</h1>
  return (
    <div>
        <h2>User List</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
