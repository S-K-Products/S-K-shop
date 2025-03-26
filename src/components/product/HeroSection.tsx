"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/product/Herosection.module.css";

const images = ["/p1.jpg", "/p2.jpg", "/p3.jpg", "/home.jpg"];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hero}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      <div className={styles.content}>
        <h1>World-Wise International</h1>
        <h2>Excellence in Global Trade</h2>
        <p>
          At World-Wise International, we redefine luxury and trust in global
          trade.
        </p>
        <p>
          From the finest gemstones and gold to secure forex and crypto
          transactions, we offer unparalleled expertise in international
          markets.
        </p>
        <button>Explore Our Services</button>
      </div>
    </div>
  );
}
