import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-links-and-form">
        <div className="footer-primary">
          <h2>Social</h2>
          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Spotify
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-secondary">
          <h2>Newsletter</h2>
          <div className="newsletter-container">
            <p className="newsletter-text">
              Be the first to know about all things Cosima's
            </p>
            <form className="newsletter-form">
              <input
                className="newsletter-input"
                type="text"
                placeholder="Your email"
              />
              <button className="newsletter-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2024 Cosima's. All rights reserved.</p>
      </div>
    </footer>
  );
}
