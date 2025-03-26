"use client"; // Mark this as a client component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu and close
import styles from "../../styles/Home/Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter(); // Use useRouter for navigation

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigate to home page when logo is clicked
  const goToHomePage = () => {
    router.push("/"); // Navigate to the home page
  };

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        {/* Left Navigation Links */}
        <nav className={styles.leftNav}>
          <ul>
            <li>
              <a href="/newpage/about">About Us</a>
            </li>
            <li>
              <a href="/newpage/">Services</a>
            </li>
          </ul>
        </nav>

        {/* Logo */}
        <div className={styles.logo} onClick={goToHomePage}>
          <img src="/logo.png" alt="Logo" className={styles.logoImage} />
        </div>

        {/* Right Navigation Links */}
        <nav className={styles.rightNav}>
          <ul>
            <li>
              <a href="/newpage/product">Products</a>
            </li>
            <li>
              <a href="/newpage/contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Navigation (Full Screen) */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ""}`}>
          <div className={styles.mobileNavHeader}>
            <div className={styles.logo} onClick={goToHomePage}>
              <img src="/logo.png" alt="Logo" className={styles.logoImage} />
            </div>
            <div className={styles.closeIcon} onClick={toggleMenu}>
              <FaTimes />
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <ul className={styles.mobileNavLinks}>
            <li>
              <a href="/newpage/about" onClick={toggleMenu}>
                About Us
              </a>
            </li>
            <li>
              <a href="/newpage/services" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="/newpage/blog" onClick={toggleMenu}>
                Blog & News
              </a>
            </li>
            <li>
              <a href="/newpage/contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
