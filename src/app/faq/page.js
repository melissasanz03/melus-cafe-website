
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FAQOneOpen from "@/components/FAQOneOpen";
import faqs from "@/metadata/faq.json"

export const metadata = {
    title: "Melu’s Cafe | FAQ",
    description: "Frequently asked questions about bookings, pricing, and our coffee cart."
  };

export default function FAQPage() {
    return(
    <>  
      <Navbar/>


      <main className="faq-page">
        <section className="faq-hero">
          <div className="container">
            <h1 className="faq-title">FREQUENTLY ASKED<br/>QUESTIONS</h1>
          </div>
        </section>

        <section className="faq-section">
          <div className="container faq-list">
            {/* one questions at a time */}
            <FAQOneOpen />

            {faqs.map((item, i) => (
              <details className="faq-item" key={i}>
                <summary className="faq-summary">
                  <span className="faq-question">{item.questions}</span>
                  <span className="faq-icon" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  {item.answers}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>


      <Footer/>  

    </>

    );
}