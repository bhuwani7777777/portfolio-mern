import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔥 SCROLL PROGRESS BAR */}
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
      ></div>

      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

        {/* 🔰 LOGO */}
        <div className="logo">
          Bhuwani<span>.dev</span>
        </div>

        {/* 📱 HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* 🔗 NAV LINKS */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>

          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>

          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

          {/* 🔥 PREMIUM CTA */}
          <button className="nav-btn">Hire Me</button>

        </div>
      </nav>
    </>
  );
}

export default Navbar;