import React, { useState } from 'react'

export default function Assignment501() {
    const [text,setText]=useState("not clicked")
    const handelclicked=()=>{
        setText("clicked")
    }
  return (
    <div>
      <p>{text}</p>
      <button onClick={handelclicked}>click me</button>
      </div>
  )
}