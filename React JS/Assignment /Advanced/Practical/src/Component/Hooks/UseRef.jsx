//with helper of useRef 

// import { useRef, useState } from "react";

// export default function UseRef() {
//   const [count, setCount] = useState(0);
//   const renderCount = useRef(0);

//   renderCount.current += 1;
//   return (
//     <div>
//       <h2>State Count: {count}</h2>
//       <h3>Render Count: {renderCount.current}</h3>

//       <button onClick={() => setCount(count + 1)}>
//         Increase State (Re-render)
//       </button>
//     </div>
//   );
// }





//without causing a re-render

// import { useRef } from "react";

// function UseRef() {
//   const inputRef = useRef();

//   const handleClick = () => {
//     alert(inputRef.current.value);
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleClick}>Show Value</button>
//     </div>
//   );
// }

// export default UseRef;

