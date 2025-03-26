"use client"; // Mark this as a client component

import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa"; // Import icons
import styles from "../../styles/Contact/Location2.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      {/* Left Side: Contact Details for Colombo */}
      <div className={styles.detailsContainer}>
        <div className={styles.locationDetails}>
          <h2>Colombo, Sri Lanka</h2>
          <div className={styles.detailItem}>
            <p>
              <FaMapMarkerAlt className={styles.icon} /> 123 Galle Road, Colombo
              03, Sri Lanka
            </p>
          </div>
          <div className={styles.detailItem}>
            <p>
              <FaPhone className={styles.icon} /> +94 11 123 4567
            </p>
          </div>
          <div className={styles.detailItem}>
            <FaClock className={styles.icon} /> <p>8 a.m - 5 p.m</p>
          </div>
        </div>
      </div>

      {/* Right Side: Google Map for Colombo */}
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.925904573855!2d79.8532153153176!3d6.894370595019828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596b8d5f3b9f%3A0x7a1b1b1b1b1b1b1b!2sGalle%20Road%2C%20Colombo%2003%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1633084800000!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
