"use client"; // Mark this as a client component

import styles from "../../styles/Contact/Contact.module.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      {/* Left Side: Contact Details */}
      <div className={styles.leftSide}>
        <h1>Contact Us</h1>
        <p>Email, Call or complete the form to learn how to</p>
        <div className={styles.contactDetails}>
          {/* WhatsApp and Email (no heading) */}
          <p>
            <FaPhone /> Service Number: +94 77 123 4567
          </p>
          <p>
            <MdEmail /> Email: info@worldwise.com
          </p>

          {/* Connect with Us Section */}
          <h3>Connect with Us</h3>
          <div className={styles.connectGrid}>
            {/* Sri Lankan Details */}
            <div className={styles.connectColumn}>
              <h4>Sri Lanka</h4>
              <p>
                <FaPhone /> +94 11 123 4567
              </p>
              <p>
                <FaLocationDot /> Colombo, Sri Lanka
              </p>
              <p>
                <IoLogoWhatsapp /> +94 77 123 4567
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className={styles.rightSide}>
        <div className={styles.formBox}>
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
