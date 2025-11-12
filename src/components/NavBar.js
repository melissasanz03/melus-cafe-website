// src/components/Navbar.js
import NavbarHideOnScroll from "./NavBarOnScroll";

export default function Navbar() {
    return (
      <> 
      <NavbarHideOnScroll/>
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/images/Melus_Cafe_Logo_Blue_3.png" alt="Melu's Cafe" className="logo-image" />
          </div>
          <div className="nav-menu" id="nav-menu">
            <a href="/" className="nav-link">Home</a>
            <a href="/#about" className="nav-link">About</a>
            <a href="/#book" className="nav-link">Book</a>
            <a href="/faq" className="nav-link">FAQ</a>
          </div>
          <div className="nav-toggle" id="nav-toggle">
            <span className="bar"></span><span className="bar"></span><span className="bar"></span>
          </div>
        </div>
      </nav>
      </> 
    );
  }
  