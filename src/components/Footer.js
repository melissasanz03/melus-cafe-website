// src/components/Footer.js
export default function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>MELU'S CAFE</h3>
              <p>Your neighborhood coffee haven, where every visit feels like coming home.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/#about">About</a></li>
                <li><a href="/#book">Contact</a></li>
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
  