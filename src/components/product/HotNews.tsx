"use client"; // Mark this component as a Client Component

import { useState } from "react";
import styles from "../../styles/Blog/HotNews.module.css";

export default function HotNews() {
  const [showAll, setShowAll] = useState(false);

  const newsItems = [
    {
      id: 1,
      image: "/1.jpeg",
      title: "Latest News 1",
      description:
        "At World-Wise International, we redefine luxury and trust in global trade.",
    },
    {
      id: 2,
      image: "/1.jpeg",
      title: "Latest News 2",
      description:
        "From the finest gemstones and gold to secure forex and crypto transactions.",
    },
    {
      id: 3,
      image: "/1.jpeg",
      title: "Latest News 3",
      description: "We offer unparalleled expertise in international markets.",
    },
    {
      id: 4,
      image: "/1.jpeg",
      title: "Latest News 4",
      description: "Our services are trusted by clients worldwide.",
    },
    {
      id: 5,
      image: "/1.jpeg",
      title: "Latest News 5",
      description:
        "Explore our latest offerings and stay ahead in global trade.",
    },
    {
      id: 6,
      image: "/1.jpeg",
      title: "Latest News 6",
      description: "Stay updated with the latest trends in global trade.",
    },
  ];

  return (
    <div className={styles.hotNews}>
      <div className={styles.container}>
        {/* Left Side: Large Image with Heading and News Items */}
        <div className={styles.leftSide}>
          <h1>Hot News</h1>
          <a href="#" className={styles.imageLink}>
            <img src="/1.jpeg" alt="Hot News" className={styles.largeImage} />
          </a>
          {/* News Items Under the Large Image */}
          <div className={styles.newsList}>
            {newsItems.slice(0, showAll ? newsItems.length : 2).map((item) => (
              <div key={item.id} className={styles.newsItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.smallImage}
                />
                <div className={styles.newsText}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Latest News with Small Images and Text */}
        <div className={styles.rightSide}>
          <h2>Latest News</h2>
          <div className={styles.newsList}>
            {newsItems.slice(0, showAll ? newsItems.length : 4).map((item) => (
              <div key={item.id} className={styles.newsItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.smallImage}
                />
                <div className={styles.newsText}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* "See All" / "Show Less" Button */}
      <div className={styles.seeAllButton}>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "See All"}
        </button>
      </div>
    </div>
  );
}
