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
      backgroundImage: "/home.jpg",
      headline: "WELCOME TO",
      tagline: "S&K Egg Shop",
      description:
        "A Visually Stunning Hero Section Featuring A High-Quality Background Image Or Video Of Gold Bars, Gemstones, Forex Trading, Or A Luxurious Business Setting.",
      buttonText: "Buy Now",
      className: "welcomeSlide",
      path: "/newpage/aboutus", // Path to aboutus page
    },
    {
      backgroundImage: "/p1.jpg",
      headline: "Vilage Egg",
      description:
        "Discover the finest certified gemstones, sourced from the world's most exclusive mines. Our collection includes sapphires, rubies, emeralds, and diamonds.",
      buttonText: "Buy Now",
      className: "gemsSlide",
      path: "/newpage/gems", // Path to gems page
    },
    {
      backgroundImage: "/p2.jpg",
      headline: "Half farm Egg",
      description:
        "Benefit from competitive exchange rates and secure foreign exchange services. We specialize in high-value forex transactions, providing fast, trusted, and efficient currency exchange solutions.",
      buttonText: "Buy Now",
      className: "currencySlide",
      path: "/currency", // Add path for this slide (if needed)
    },
    {
      backgroundImage: "/p3.jpg",
      headline: "Farm Egg",
      description:
        "Trade in pure, investment-grade gold, sourced with transparency and certification. We offer secure transactions for gold bars, coins, and bullion, ensuring reliability for investors and collectors.",
      buttonText: "Buy Now",
      className: "goldSlide",
      path: "/gold", // Add path for this slide (if needed)
    },
    {
      backgroundImage: "/p1.jpg",
      headline: "All Eggs",
      description:
        "Elevate your financial experience with our luxury-focused premium services, including exclusive commodity sourcing and high-value investment opportunities tailored for elite clients.",
      buttonText: "See All",
      className: "premiumSlide",
      path: "/premium-services", // Add path for this slide (if needed)
    },
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
