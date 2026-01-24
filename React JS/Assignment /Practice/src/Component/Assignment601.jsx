import React, { useState } from 'react'

export default function Assignment601() {
    const [login,setLogin]=useState(false)
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {login ? (
        <button onClick={() => setLogin(false)}>
          Logout
        </button>
      ) : (
        <button onClick={() => setLogin(true)}>
          Login
        </button>
      )}
    </div>
  )
}
