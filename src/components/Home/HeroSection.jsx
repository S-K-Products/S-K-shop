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
      image: "/home.jpg",
      title: "Modern Digital Solutions",
      description:
        "Transform your business with cutting-edge digital strategies tailored to your unique needs.",
      buttonPrimary: { text: "Get Started", href: "/start" },
      buttonSecondary: { text: "Learn More", href: "/solutions" },
    },
    {
      id: 2,
      image: "/bitcoin.webp",
      title: "Creative Design Services",
      description:
        "Stand out with stunning visuals and intuitive interfaces that captivate your audience.",
      buttonPrimary: { text: "View Portfolio", href: "/portfolio" },
      buttonSecondary: { text: "Our Process", href: "/process" },
    },
    {
      id: 3,
      image: "/premium.jpg",
      title: "E-commerce Excellence",
      description:
        "Boost your online sales with our specialized e-commerce solutions and marketing strategies.",
      buttonPrimary: { text: "Shop Now", href: "/shop" },
      buttonSecondary: { text: "Case Studies", href: "/cases" },
    },
    {
      id: 4,
      image: "/money.jpg",
      title: "Enterprise Solutions",
      description:
        "Scalable and secure technology infrastructure to support your growing business needs.",
      buttonPrimary: { text: "Contact Us", href: "/contact" },
      buttonSecondary: { text: "Our Clients", href: "/clients" },
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
                <Link href={slide.buttonSecondary.href} className={styles.secondaryButton}>
                  {slide.buttonSecondary.text}
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
