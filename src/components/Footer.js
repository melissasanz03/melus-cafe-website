// src/components/Footer.js
import SocialMedia from "./SocialMedia";
export default function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>MELU'S CAFE</h3>
              <p>A premium coffee experience, made delicate, warm, and beautifully simple.</p>
              <SocialMedia/>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/#about">About</a></li>
                {/*<li><a href="/booking">Book</a></li>*/}
                <li><a href="/#book">Contact</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Newsletter</h3>
              <p>Subscribe for updates on new menu items and special offers!</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Email" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Melu's Cafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  