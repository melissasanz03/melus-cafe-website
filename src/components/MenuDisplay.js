
export default function MenuDisplay(){
    return(

        <section id="menu" className="menu-preview">
        <div className="container">
            <h2 className="section-title">OUR FAVORITES</h2>
            
            <div className="menu-grid">

                <div className="menu-item">
                    <div className="menu-thumb">
                      <img src="images/pastry-1.jpg" alt="Matcha latte" className="menu-image"/>
                    </div>
                    <p className="menu-label">Matcha latte</p>
                  </div>
                  <div className="menu-item">
                    <div className="menu-thumb">
                      <img src="images/pastry-1.jpg" alt="Matcha latte" className="menu-image"/>
                    </div>
                    <p className="menu-label">Matcha latte</p>
                  </div>
                  <div className="menu-item">
                    <div className="menu-thumb">
                      <img src="images/pastry-1.jpg" alt="Matcha latte" className="menu-image"/>
                    </div>
                    <p className="menu-label">Matcha latte</p>
                  </div>
                  <div className="menu-item">
                    <div className="menu-thumb">
                      <img src="images/pastry-1.jpg" alt="Matcha latte" className="menu-image"/>
                    </div>
                    <p className="menu-label">Matcha latte</p>
                  </div>
            </div>

            <div className="menu-cta">
                <a href="#" className="cta-button secondary">View Full Menu</a>
            </div>
        </div>
    </section>

    );
}