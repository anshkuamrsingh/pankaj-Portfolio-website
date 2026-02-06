import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
  <span className="my">My Portfolio </span>
</div>


      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#Home">Home</a>
        <a href="#about">About</a>
        <a href="#Education">Education</a>
        <a href="#internship">Internship</a>
        <a href="#Project">Project</a>
        <a href="#certification">Certification</a>
      
      </div>

        {/* NEW ANIMATED HAMBURGER */}
      <div className={`menu-icon ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
