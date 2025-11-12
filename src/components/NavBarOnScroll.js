"use client";
import { useEffect } from "react";

export default function NavbarHideOnScroll() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        // scrolling down – hide
        navbar.style.transform = "translateY(-100%)";
        navbar.style.transition = "transform 0.3s ease-out";
      } else {
        // scrolling up – show
        navbar.style.transform = "translateY(0)";
        navbar.style.transition = "transform 0.3s ease-out";
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
