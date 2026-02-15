import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>AI Resume Builder</h2>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
      </div>
    </nav>
  );
}
