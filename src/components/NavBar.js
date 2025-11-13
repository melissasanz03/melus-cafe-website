// src/components/Navbar.js
"use client";
import NavbarHideOnScroll from "./NavBarOnScroll";
import { useState, useRef, useEffect }from "react";
export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

    // Close menu when clicking outside navbar (mobile and ipads)
    useEffect(() => {
      function handleClickOutside(event) {
        if (navRef.current && !navRef.current.contains(event.target)) {
          setMenuOpen(false);
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  const closeMenu = () => setMenuOpen(false);

    return (
      <> 
      <NavbarHideOnScroll/>
      <nav className="navbar" id="navbar" ref={navRef}>
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/images/Melus_Cafe_Logo_Blue_3.png" alt="Melu's Cafe" className="logo-image" />
          </div>
          <div className={`nav-menu ${menuOpen ? "active" : ""}`} id="nav-menu">
            <a href="/" className="nav-link" onClick={closeMenu}>Home</a>
            <a href="/#about" className="nav-link" onClick={closeMenu}>About</a>
            <a href="/#book" className="nav-link" onClick={closeMenu}>Book</a>
            <a href="/faq" className="nav-link" onClick={closeMenu}>FAQ</a>
          </div>

          {/* Burger Button */}
          <button
          className={`nav-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu">

            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>

        </button>
          
            
          
        </div>
      </nav>
      </> 
    );
  }
  