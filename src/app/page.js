
import BackToTop from "@/components/BackToTop";
import MenuDisplay from "@/components/MenuDisplay";
import Hero from "@/components/Hero";
import ValueFeatures from "@/components/ValueFeatures";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
   <>
     
     <Navbar/>
    
     <Hero/>

    {/* values 
    <section className="features-grid-images">
       
            <div className="features-grid">

                <div className="feature-item">
                    <div className="feature-image-wrapper">
                        <img src="images/warning-icon.png" alt="Artisan Coffee" className="feature-image"/>
                    </div>
                        <h3 className="feature-title">Meticulous</h3>
                </div>
                <div className="feature-item">
                    <div className="feature-image-wrapper">
                        <img src="images/warning-icon.png" alt="Artisan Coffee" className="feature-image"/>
                    </div>
                        <h3 className="feature-title">Meticulous</h3>
                </div>
                <div className="feature-item">
                    <div className="feature-image-wrapper">
                        <img src="images/warning-icon.png" alt="Artisan Coffee" className="feature-image"/>
                    </div>
                        <h3 className="feature-title">Meticulous</h3>
                </div>
                <div className="feature-item">
                    <div className="feature-image-wrapper">
                        <img src="images/warning-icon.png" alt="Artisan Coffee" className="feature-image"/>
                    </div>
                        <h3 className="feature-title">Meticulous</h3>
                </div>

            </div>
       
    </section>*/}
    <ValueFeatures/>
    

    <MenuDisplay/>
    <About/>

    <Contact/>

   <Footer/>

    {/* Back to Top Button */}
   <BackToTop/>
   </>
  );
}
