// src/components/About.js

export default function About() {
    return(
        <section id="about" className="about">
        <div className="container">
            <div className="about-content">
                <div className="about-text">
                    <h2>Our Story</h2>
                    <p>Melu’s Café was created from a love for Colombian specialty coffee and the belief that a beautiful cup can brighten any moment.</p>
                    <p>As a Colombian-owned, we focus on intentional brewing, meticulous quality, and sustainable choices. Every drink is crafted with care, soft, simple, and elevated to give you a gentle pause in your day.</p>
                    <p>Our flavors are inspired by home, our service is warm, and our mission is to share a premium coffee experience that feels comforting, curated, and uniquely us.</p>
                    
                </div>
                <div className="about-image">
                    <img src="images/coffee-bar.jpeg" alt="Cafe Interior"/>
                </div>
            </div>
        </div>
    </section>
    );
}