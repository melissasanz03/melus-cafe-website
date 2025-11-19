
import images from "@/metadata/menu.json"
export default function MenuDisplay(){
    return(

        <section id="menu" className="menu-preview">
        <div className="container">
            <h2 className="section-title">OUR FAVORITES</h2>
            
            <div className="menu-grid">

              {images.map((item, i) => (

                  <div className="menu-item" key={i}>
                  <div className="menu-thumb">
                    <img src={item.src} alt={item.alt} className="menu-image"/>
                  </div>
                  <p className="menu-label">{item.label}</p>
                </div>

              ))}


            </div>

            <div className="menu-cta">
                <a href="/#menu" className="cta-button secondary">View Full Menu</a>
            </div>
        </div>
    </section>

    );
}