"use client";
import { useEffect } from "react";

export default function FAQOneOpen() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".faq-item"));

    // Allow only one <details> open at a time
    const onToggle = (e) => {
      if (e.target.open) {
        items.forEach((d) => d !== e.target && d.removeAttribute("open"));
      }
    };
    items.forEach((d) => d.addEventListener("toggle", onToggle));

    // Optional: smooth height animation
    const animate = (details) => {
      const content = details.querySelector(".faq-answer");
      if (!content) return;
      content.style.height = details.open ? `${content.scrollHeight}px` : "0px";
    };
    const onClick = (e) => {
      const d = e.currentTarget;
      requestAnimationFrame(() => animate(d));
    };
    items.forEach((d) => {
      const content = d.querySelector(".faq-answer");
      if (content) content.style.height = "0px";
      d.addEventListener("click", onClick);
    });

    return () => {
      items.forEach((d) => d.removeEventListener("toggle", onToggle));
      items.forEach((d) => d.removeEventListener("click", onClick));
    };
  }, []);

  return null;
}
