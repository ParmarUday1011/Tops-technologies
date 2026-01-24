import React, { useState } from "react";


const Assignment801 = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password,setpassword]=useState("")
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent refresh
    setSubmittedData({ fullname,email,password });
  };

  return (
    <div>
      <div
        style={{
          margin: "30px",
          textAlign: "center",
          marginTop: "100px",
          backgroundColor: "gold",
        }}
      >
        <h2 style={{ fontSize: "60px" }}>Event Handling Demo</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={{ fontWeight: "bold", fontSize: "20px" }}>
              Full Name:{" "}
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter full name"
              style={{
                marginLeft: "10px",
                borderRadius: "5px",
                border: "1px solid black",
              }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label style={{ fontWeight: "bold", fontSize: "20px" }}>
              Email:{" "}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              style={{
                marginLeft: "10px",
                borderRadius: "5px",
                border: "1px solid black",
              }}
            />
          </div>
           <div style={{ marginTop: "10px" }}>
            <label style={{ fontWeight: "bold", fontSize: "20px" }}>
              Password:{" "}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter password"
              style={{
                marginLeft: "10px",
                borderRadius: "5px",
                border: "1px solid black",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              marginTop: "15px",
              marginBottom: "10px",
              marginLeft: "10px",
              borderRadius: "5px",
              border: "1px solid black",
            }}
          >
            Submit
          </button>
        </form>
      </div>
      {submittedData && (
        <div style={{ marginTop: "20px",margin:"30px", textAlign:"center", backgroundColor:"goldenrod" }}>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.fullname}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

export default Assignment801;
