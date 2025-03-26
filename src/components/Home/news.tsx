"use client";

import { useState, useEffect } from 'react';
import styles from '../../styles/Home/News.module.css';

const newsItems = [
  {
    id: 1,
    image: '/1.jpeg',
    title: 'Gold Demand Hits Record High of 4,974 Tonnes in 2024',
    content: 'In 2024, global gold demand reached an unprecedented 4,974 tonnes, driven by substantial central bank purchases and increased investment interest.',
  },
  {
    id: 2,
    image: '/2.jpeg',
    title: 'Bitcoin Holds Above $97,000; Altoins Trade Mixed',
    content: 'As of February 4, 2025, Bitcoin maintained a value above $97,000, with Ethereum ranging over 4% to $2,827. Institutional interest is growing, evidenced by over $350 million in ETF inflows.',
  },
  {
    id: 3,
    image: '/3.jpeg',
    title: 'Gemstone Trends - What Gemstones Are Popular Right Now',
    content: 'As of February 6, 2025, Bitcoin maintained a value above $97,000, with Ethereum ranging over 4% to $2,827. Institutional interest is growing, evidenced by over $350 million in ETF inflows.',
  },
];

const hotNews = [
  {
    id: 1,
    image: '/4.jpeg',
    title: 'High Impact Forex News - 2025 List',
    content: 'Staying updated with high-impact focus news is crucial for traders. This resource provides a list of significant focus areas for 2025, helping traders make informed decisions.',
  },
  {
    id: 2,
    image: '/5.jpeg',
    title: 'Central Bank Purchases Drive Gold Demand',
    content: 'Central banks around the world are increasing their gold reserves, contributing to the record-high demand in 2024.',
  },
];

const latestNews = [
  {
    id: 1,
    image: '/6.jpeg',
    title: 'Bitcoin Maintains Strong Position',
    content: 'Bitcoin continues to hold its value above $97,000, with growing institutional interest and ETF inflows.',
  },
  {
    id: 2,
    image: '/7.jpeg',
    title: 'Gemstone Trends - What Gemstones Are Popular Right Now',
    content: 'As of February 6, 2025, Bitcoin maintained a value above $97,000, with Ethereum ranging over 4% to $2,827. Institutional interest is growing, evidenced by over $350 million in ETF inflows.',
  },
  {
    id: 3,
    image: '/8.jpeg',
    title: 'Global Gold Demand Hits Record High',
    content: 'In 2024, global gold demand reached an unprecedented 4,974 tonnes, driven by substantial central bank purchases and increased investment interest.',
  },
];

export default function News() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentNews = newsItems[currentNewsIndex];

  return (
    <div>
      <h1 className={styles.heading}>Blog & News</h1>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.mainNews}>
            <img
              src={currentNews.image}
              alt={currentNews.title}
              className={styles.mainNewsImage}
            />
            <div className={styles.mainNewsContent}>
              <h2>{currentNews.title}</h2>
              <p>{currentNews.content}</p>
            </div>
          </div>
          <div className={styles.hotNewsContainer}>
            {hotNews.map((news) => (
              <div key={news.id} className={styles.hotNewsItem}>
                <img src={news.image} alt={news.title} />
                <div className={styles.hotNewsItemContent}>
                  <h3>{news.title}</h3>
                  <p>{news.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rightSide}>
          <h2>Latest News</h2>
          <div className={styles.latestNewsContainer}>
            {latestNews.map((news) => (
              <div key={news.id} className={styles.latestNewsItem}>
                <img src={news.image} alt={news.title} />
                <div className={styles.latestNewsItemContent}>
                  <h3>{news.title}</h3>
                  <p>{news.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className={styles.viewMoreButton}>View More</button>
        </div>
      </div>
    </div>
  );
}