"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      
    };

    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("Thanks for your message! ☕ We'll reply soon.");
        form.reset();
      } else {
        const { error } = await res.json().catch(() => ({ error: "Unknown error" }));
        setStatus(`Submit failed: ${error}`);


      }
     
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} id="contactForm" >
      <input name="name" type="text" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" rows="5" required />
      <button type="submit" className="cta-button">SUBMIT</button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
