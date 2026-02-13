import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    const styles={
         nav: {
    background: "#222",
    padding: "15px",
    display: "flex",
    gap: "20px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }
    }

  return (
    <div>
        <nav style={styles.nav}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/About" style={styles.link}>About</Link>
            <Link to="/Contact" style={styles.link}>Contact</Link>
        </nav>
    </div>
  )
}
