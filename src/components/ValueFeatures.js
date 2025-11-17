
// src/components//ValueFeatures.js
import vals from "@/metadata/values.json"
export default function ValueFeatures() {
    
    return(
        <section className="features-grid-images">
       
        <div className="features-grid">

            {vals.map((item, i) => (

            <div className="feature-item" key={i}>
            <div className="feature-image-wrapper">
                <img src={item.img} alt="Artisan Coffee" className="feature-image"/>
            </div>
                <h3 className="feature-title">{item.value}</h3>
            </div>

            ))}


        </div>
   
        </section>
    );
}