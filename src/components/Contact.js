
import ContactForm from "./ContactForm";

export default function Contact() {
    return(
        <section id="book" className="contact">
        <div className="container">
            <h2 className="section-title">CONTACT US</h2>

            <div className="contact-content">
   
                <div className="contact-info">
                    <div className="contact-item">
                        <span className="icon-round"><i className="fas fa-map-marker-alt"></i></span>
                        <div>
                            <h4 className="info-label">Location</h4>
                            <p>nyc Area</p>
                        </div>
                    </div>
    
                    <div className="contact-item">
                        <span className="icon-round"><i className="fas fa-phone"></i></span>
                        <div>
                            <h4 className="info-label">Contact</h4>
                            <p>(347) 852-7687<br/>hello@meluscafe.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="icon-round"><i className="fas fa-question"></i></span>
                        <div>
                            <h4 className="info-label">Questions?</h4>
                            <p>Visit our {""} <a href="/faq" className="faq-link"> FAQ </a> {""} for quick asnwers to common quesitons.</p>
                        </div>
                    </div>
                    <hr className="contact-divider" />
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>

               
                <div className="contact-form">
                    <h3 className="form-title">Submit an Inquiry</h3>
                    <ContactForm/>
    
                </div>
          </div>
           
        </div>
    </section>

    );
}