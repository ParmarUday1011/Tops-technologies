export default function Assignment701() {
    const fruit=['apple','banana','mango','watermelon']
  return (
    <div>
      <h1>Fruits lists</h1>
      <ul>
        {fruit.map((fruit)=>(
            <li>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}
