"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // show after scrolling ~300px
      setVisible(window.scrollY > 300);
    };
    onScroll(); // run once on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      id="backToTop"
      aria-label="Back to top"
      onClick={scrollTop}
      className={`back-to-top ${visible ? "show" : ""}`}
    >
      <i className="fas fa-arrow-up" aria-hidden="true"></i>

    </button>
  );
}
