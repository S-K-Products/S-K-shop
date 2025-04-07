"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home/HeroSection.module.css";

const CoverCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/egg-01.png",
      title: "Fresh Farm Eggs",
      description:
        "Get the freshest eggs directly from our farm, packed with nutrients and flavor.",
      buttonPrimary: { text: "Contact Now", href: "/newpage/contact" },
      
    },
    {
      id: 2,
      image: "/egg-02.png",
      title: "Organic Egg Options",
      description:
        "Choose from our wide selection of organic eggs, perfect for your healthy lifestyle.",
      buttonPrimary: { text: "View Products", href: "/newpage/product" },
      
    },
    {
      id: 3,
      image: "/egg-03.png",
      title: "Premium Grade Eggs",
      description:
        "Indulge in the best quality eggs, from carefully raised hens to your kitchen.",
      buttonPrimary: { text: "Order Now", href: "/newpage/contact" },
      
    },
    {
      id: 4,
      image: "/egg-04.png",
      title: "Egg Delivery Services",
      description:
        "Enjoy the convenience of having fresh eggs delivered right to your doorsteps.",
      buttonPrimary: { text: "Get Started", href: "/newpage/services" },
      // buttonSecondary: { text: "See Delivery Areas", href: "/delivery-areas" },
    },
  ];
  

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 600); // Set timeout for animation duration
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 600); // Set timeout for animation duration
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== activeSlide) {
      setIsAnimating(true);
      setActiveSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <section className={styles.coverSection}>
      <div className={styles.carouselContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.carouselSlide} ${
              index === activeSlide ? styles.active : ""
            }`}
            style={{
              transform: `translateX(${(index - activeSlide) * 100}%)`,
              opacity: index === activeSlide ? 1 : 0,
            }}
          >
            <div className={styles.slideImageContainer}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className={styles.slideImage}
              />
              <div className={styles.overlay}></div>
            </div>

            <div className={styles.slideContent}>
              <h2 className={styles.slideTitle}>{slide.title}</h2>
              <p className={styles.slideDescription}>{slide.description}</p>

              <div className={styles.slideButtons}>
                <Link href={slide.buttonPrimary.href} className={styles.primaryButton}>
                  {slide.buttonPrimary.text}
                </Link>
                
              </div>
            </div>
          </div>
        ))}

        <button className={`${styles.carouselControl} ${styles.prev}`} onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button className={`${styles.carouselControl} ${styles.next}`} onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === activeSlide ? styles.activeIndicator : ""}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoverCarousel;
