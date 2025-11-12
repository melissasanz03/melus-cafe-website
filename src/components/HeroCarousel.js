"use client";
import { useEffect } from "react";

export default function HeroCarousel({ delay = 5000, transitionMs = 1500 }) {
  useEffect(() => {
    class HeroCarousel {
      constructor() {
        this.slides = document.querySelectorAll(".carousel-slide");
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.autoPlayInterval = null;
        this.autoPlayDelay = delay;         // from props
        this.isTransitioning = false;
        this.transitionMs = transitionMs;   // from props
        this.init();
      }

      init() {
        if (this.totalSlides === 0) return;
        this.showSlide(this.currentSlide);
        this.startAutoPlay();
        this.bindEvents();
      }

      bindEvents() {
        const carousel = document.querySelector(".hero-carousel");
        if (carousel) {
          this._onEnter = () => this.pauseAutoPlay();
          this._onLeave = () => this.resumeAutoPlay();
          carousel.addEventListener("mouseenter", this._onEnter);
          carousel.addEventListener("mouseleave", this._onLeave);

          this._onVis = () => (document.hidden ? this.pauseAutoPlay() : this.resumeAutoPlay());
          document.addEventListener("visibilitychange", this._onVis);
        }
      }

      showSlide(index) {
        if (this.isTransitioning || this.totalSlides === 0) return;
        this.isTransitioning = true;
        this.slides.forEach(slide => slide.classList.remove("active"));
        this.slides[index].classList.add("active");
        setTimeout(() => { this.isTransitioning = false; }, this.transitionMs);
      }

      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.showSlide(this.currentSlide);
      }

      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.showSlide(this.currentSlide);
      }

      startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => this.nextSlide(), this.autoPlayDelay);
      }

      stopAutoPlay() {
        if (this.autoPlayInterval) {
          clearInterval(this.autoPlayInterval);
          this.autoPlayInterval = null;
        }
      }

      pauseAutoPlay() { this.stopAutoPlay(); }
      resumeAutoPlay() { this.startAutoPlay(); }

      destroy() {
        this.stopAutoPlay();
        const carousel = document.querySelector(".hero-carousel");
        if (carousel) {
          carousel.removeEventListener("mouseenter", this._onEnter);
          carousel.removeEventListener("mouseleave", this._onLeave);
          document.removeEventListener("visibilitychange", this._onVis);
        }
      }
    }

    const inst = new HeroCarousel();
    return () => inst.destroy();
  }, [delay, transitionMs]);

  return null; // behavior only
}
