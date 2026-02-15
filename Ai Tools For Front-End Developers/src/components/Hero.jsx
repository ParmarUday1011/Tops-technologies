import React from 'react'
import hero from "../Assets/Firefly.png"

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>Build Job-Winning Resumes with AI</h1>
        <p>Create ATS-friendly resumes in minutes.</p>
        <button>Get Started</button>
      </div>
      <img src={hero} alt="AI Resume Builder Dashboard" />
    </section>
  )
}
