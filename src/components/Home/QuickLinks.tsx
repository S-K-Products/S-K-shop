import React from 'react';
import { FaHome, FaInfoCircle, FaCogs, FaBlog, FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import styles from '../../styles/Home/Quicklinks.module.css';
import { IoMdInformationCircle } from "react-icons/io";
import { IoMdHome } from "react-icons/io";

const QuickLinks = () => {
  return (
    <div className={styles.container}>
      {/* Quick Links Section (Left Side) */}
      <div className={styles.quickLinks}>
        <h2 className={styles.heading}>Quick Links</h2>
        <ul className={styles.linksList}>
          <li className={styles.linkItem}>
            <IoMdHome className={styles.icon} />
            <a href="/">Home</a>
          </li>
          <li className={styles.linkItem}>
            <IoMdInformationCircle  className={styles.icon} />
            <a href="newpage/about">About Us</a>
          </li>
          <li className={styles.linkItem}>
            <FaCogs className={styles.icon} />
            <a href="/services">Service</a>
          </li>
          <li className={styles.linkItem}>
            <FaBlog className={styles.icon} />
            <a href="/blog">Blog & News</a>
          </li>
          <li className={styles.linkItem}>
            <FaEnvelope className={styles.icon} />
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Logo (Center) */}
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" className={styles.logoImage} />
      </div>

      {/* Reach Us Section (Right Side) */}
      <div className={styles.reachUs}>
        <h2 className={styles.heading}>Reach Us</h2>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <p>Trafalgar Square, London WC2N 50M, United Kingdom</p>
          </div>
          <div className={styles.contactItem}>
            <FaPhone className={styles.contactIcon} />
            <p>+94 74 948 8473</p>
          </div>
          <div className={styles.contactItem}>
            <FaClock className={styles.contactIcon} />
            <p>8 a.m - 5 p.m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;