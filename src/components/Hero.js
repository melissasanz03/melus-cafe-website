"use client";

import { useEffect, useState } from "react";
import SLIDES from "@/metadata/hero.json"
export default function Hero() {

  const [current, setCurrent] = useState(0);
  const delay = 5000;       // 5s
  const transitionMs = 1500; // match your CSS fade

  useEffect(() => {
    // auto-play interval
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, delay);

    // pause when tab not visible
    const onVis = () => {
      if (document.hidden) {
        clearInterval(id);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [delay]);

  return (
    <section id="home" className="hero">
      <div className="hero-carousel">
        <div className="carousel-container">
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              className={
                "carousel-slide" + (index === current ? " active" : "")
              }
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="carousel-image"
              />
            </div>
          ))}
        </div>

        <div className="hero-content">
          <div className="hero-main-content">
            <p className="hero-subtitle">Welcome to</p>
            <h1 className="hero-title">MELU&apos;S CAFE</h1>
            <p className="hero-subtitle">
            Coffee crafted with intention a gentle pause to sip, feel, and smile.
            </p>
          </div>
          <a href="#book" className="cta-button"> BOOK NOW</a>
        </div>
      </div>
    </section>
  );
}