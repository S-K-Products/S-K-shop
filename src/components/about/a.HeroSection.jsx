"use client"; // Mark this as a client component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Import new arrow icons
import styles from "../../styles/Home/HeroSection.module.css";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter(); // Initialize useRouter

  // Function to handle button click
  const handleButtonClick = (path) => {
    router.push(path); // Navigate to the specified path
  };

  const slides = [
    {
      backgroundImage: "/p1.jpg",
      headline: "S&K Egg Supluyers",
      description:
        "With decades of expertise in global trade and luxury assets, World-Wise International is your trusted partner in financial and commodity markets.",
      buttonText: "Explore Our services",
      className: "gemsSlide",
      path: "/newpage/product", // Path to gems page
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual slide navigation
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className={styles.heroSection}>
      {/* Slides Container */}
      <div
        className={styles.slidesContainer}
        style={{ transform: `translateX(-${currentSlide * 20}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${styles[slide.className]}`}
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            <div className={styles.slideContent}>
              <h1>{slide.headline}</h1>
              {slide.tagline && <h2>{slide.tagline}</h2>}
              <p>{slide.description}</p>
              <button onClick={() => handleButtonClick(slide.path)}>
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className={styles.arrowLeft} onClick={goToPrevSlide}>
        <IoIosArrowBack />
      </button>
      <button className={styles.arrowRight} onClick={goToNextSlide}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default HeroSection;
