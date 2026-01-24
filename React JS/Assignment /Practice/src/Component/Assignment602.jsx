import React, { useState } from 'react'

export default function Assignment602() {
    const [age , setAge]=useState(0)
  return (
    <div>
      <input type="text" placeholder='Enter your age' onChange={(e)=>setAge(e.target.value)} />
      <p>
        {age === "" 
      ? "plese enter your age" 
      : age>=18 ? "you can vote" 
      : "your age is less the 18"}
      </p>
    </div>
  )
}


 