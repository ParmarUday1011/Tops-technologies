import React, { useEffect, useState } from 'react'

export default function LoadingspinnerAPI() {
     const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  }
  return (
    <div>
        <h2>User List</h2>
       <table border="1" cellPadding="10">
         <thead>
         <tr>
           <th>Name</th>
             <th>Email</th>
             <th>City</th>
          </tr>
        </thead>
         <tbody>
          {users.map((user) => (
            <tr key={user.id}>
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
