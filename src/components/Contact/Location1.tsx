"use client"; // Mark this as a client component

import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa"; // Import icons
import styles from "../../styles/Contact/Location1.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      {/* Left Side: Google Map */}
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540423326382!2d-0.127758384229427!3d51.50735097960448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sTrafalgar%20Square%2C%20London%2C%20UK!5e0!3m2!1sen!2slk!4v1633084800000!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Right Side: Contact Details */}
      <div className={styles.detailsContainer}>
        <h1>Connecting Near and Far</h1>
        <div className={styles.locationDetails}>
          <h2>United Kingdom</h2>
          <div className={styles.detailItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <p>Tradiga's Square, London WC2N 3DN, United Kingdom</p>
          </div>
          <div className={styles.detailItem}>
            <FaPhone className={styles.icon} />
            <p>+94 74 948 8473</p>
          </div>
          <div className={styles.detailItem}>
            <FaClock className={styles.icon} />
            <p>8 a.m - 5 p.m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
