"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/Home/feedback.module.css";

const FeedBacks = () => {
  const services = [
    {
      title: "Chamath",
      description: "Nice eggs. never taste good never had before like that”"
    },
    {
      title: "Nimna",
      description: "Eggs from non-farm hens mmmm."
    },
    {
      title: "Achintha",
      description: "Fresh eggs from farm hens. Nutrient is low"
    },
    {
      title: "Udhana",
      description: "Nice eggs. never taste good never had before like that”"
    },
    {
      title: "neranjana",
      description: "Eggs from non-farm hens mmmm."
    },
    {
      title: "raj",
      description: "Fresh eggs from farm hens. Nutrient is low"
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
      <h2>Feec Backs</h2>
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

export default FeedBacks;