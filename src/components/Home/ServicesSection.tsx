"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/Home/ServicesSection.module.css";

const ServicesSection = () => {
  const services = [
    {
      title: "Village Egg",
      description: "Clean eggs from clean hens in the village. More nutritious",
      image: "/p1.jpg",
    },
    {
      title: "Half farm Egg",
      description: "Eggs from non-farm hens mmmm.",
      image: "/p2.jpg",
    },
    {
      title: "Farm Egg",
      description: "Fresh eggs from farm hens. Nutrient is low",
      image: "/p3.jpg",
    },
    {
      title: "Village Egg",
      description: "Clean eggs from clean hens in the village. More nutritious",
      image: "/p1.jpg",
    },
    {
      title: "Half farm Egg",
      description: "Eggs from non-farm hens mmmm.",
      image: "/p2.jpg",
    },
    {
      title: "Farm Egg",
      description: "Fresh eggs from farm hens. Nutrient is low",
      image: "/p3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  const getPosition = (index: number) => {
    const total = services.length;
    const left = (currentIndex - 1 + total) % total;
    const right = (currentIndex + 1) % total;

    if (index === currentIndex) return "middle";
    if (index === left) return "left";
    if (index === right) return "right";
    return "hidden";
  };

  return (
    <section className={styles.servicesSection}>
      <h2>Our Products</h2>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => {
          const position = getPosition(index);

          return (
            <div
              key={index}
              className={`${styles.serviceCard} ${styles[position]}`}
            >
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;