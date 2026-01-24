import React, { useState } from 'react'

export default function Assignment402() {
    const [count, setCount] = useState(0)

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}
