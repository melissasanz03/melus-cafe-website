import HeroCarousel from "@/components/HeroCarousel";
export default function Hero() {

    return(
        <>
        <HeroCarousel delay={5000} transitionMs={1500} />
        <section id="home" className="hero">
        <div className="hero-carousel">
            <div className="carousel-container">
            
                <div className="carousel-slide active">
                    <img src="images/hero-2.jpeg" alt="Artisan Coffee at Melu's Cafe" className="carousel-image"/>
                </div>
                <div className="carousel-slide">
                    <img src="images/hero-4.jpeg" alt="Fresh Pastries at Melu's Cafe" className="carousel-image"/>
                </div>
                <div className="carousel-slide">
                    <img src="images/hero-1.jpeg" alt="Cozy Atmosphere at Melu's Cafe" className="carousel-image"/>
                </div>
                <div className="carousel-slide">
                    <img src="images/hero-3.jpeg" alt="Cozy Atmosphere at Melu's Cafe" className="carousel-image"/>
                </div>

            </div>

            <div className="hero-content">
                <div className="hero-main-content">
                    <p className="hero-subtitle">Welcome to</p>
                    <h1 className="hero-title">MELU'S CAFE</h1>
                    <p className="hero-subtitle">Where every cup tells a story and every bite feels like home.</p>
                </div>
                <a href="#book" className="cta-button">BOOK NOW</a>
            </div>
        </div>
    </section>
    </>
    );
}