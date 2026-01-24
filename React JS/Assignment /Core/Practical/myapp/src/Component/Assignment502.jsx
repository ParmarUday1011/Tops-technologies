import React, { use, useState } from 'react'

export default function Assignment502() {
    const [value,setValue]=useState("")
    const handelinput=(e)=>{
        setValue(e.target.value)
    }

  return (
    <form>
        <input type="text" value={value} onChange={handelinput} />
        <p>typed : {value}</p>
    </form>
  )
}
