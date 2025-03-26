import styles from "../../styles/Home/ContactSection.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.title}>Connect With Us</h2>

      <div className={styles.content}>
        <div className={styles.formSection}>
          <h3 className={styles.heading}>Ask a Question</h3>
          <form>
            <input type="text" placeholder="Your Name" className={styles.input} />
            <input type="email" placeholder="Email" className={styles.input} />
            <textarea placeholder="Note" className={styles.textarea}></textarea>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className={styles.reachSection}>
          <h3 className={styles.heading}>Find Us</h3>
          <div className={styles.locations}>
            
            {/* First Location */}
            <div className={styles.locationRow}>
              <iframe
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18..."
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className={styles.locationDetails}>
                <p><FaMapMarkerAlt className={styles.icon} /> Trafalgar Square, London WC2N 5DN, UK</p>
                <p><FaPhoneAlt className={styles.icon} /> +94 74 948 8473</p>
                <p><FaClock className={styles.icon} /> 8 a.m - 5 a.m</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
