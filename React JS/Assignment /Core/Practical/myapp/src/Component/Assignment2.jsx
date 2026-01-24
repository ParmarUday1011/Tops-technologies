import React from 'react'

export default function Assignment2() {
    const work ="react"
    const date = new Date().getFullYear()

  return (
    <div>
      <h1>Welcome to JSX</h1>
      <p>JSX is a syntax extension used in {work}. It allows you to write
        HTML-like code inside JavaScript, making UI development easier and more
        readable. Current year is {date}.</p>
    </div>
  )
}
