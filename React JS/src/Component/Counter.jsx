import { useState } from "react"

export default function Counter() {
    const [count,setCount]=useState(1)
    const increment =()=>{
        setCount(count + 1)
    }
    const decrement =()=>{
        setCount(count - 1)
    }
  return (
    <div>
      <div style={{ margin: "20px", padding: "10px", textAlign:"center", backgroundColor:"pink"  , fontFamily:"cursive" }}>
      <h2>Counter App</h2>
      <h3>Value: {count}</h3>

      <button className="btn btn-success "onClick={increment} style={{ marginRight: 10 }}>+</button>
      <button className="btn btn-danger" onClick={decrement}>-</button>
    </div>
    </div>
  )
}
