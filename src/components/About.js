// src/components/About.js

export default function About() {
    return(
        <section id="about" className="about">
        <div className="container">
            <div className="about-content">
                <div className="about-text">
                    <h2>Our Story</h2>
                    <p>Melu's Cafe began with a simple dream: to create a warm, welcoming space where friends gather, ideas bloom, and community thrives. Named after our grandmother Melu, who believed that good food and great conversation could heal the world.</p>
                    <p>Every cup we serve carries her spirit of hospitality, every pastry her love for bringing people together. We're not just serving coffee; we're brewing connections, one cup at a time.</p>
                    
                </div>
                <div className="about-image">
                    <img src="images/hero-1.jpeg" alt="Cafe Interior"/>
                </div>
            </div>
        </div>
    </section>
    );
}