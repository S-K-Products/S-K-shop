"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/Home/Header.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    const handleScrollCloseMenu = () => isMenuOpen && setIsMenuOpen(false);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollCloseMenu);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollCloseMenu);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { path: '/newpage/home', label: 'Home' },
    { path: '/newpage/product', label: 'Products' },
    { path: '/newpage/about', label: 'About Us' },
    { path: '/newpage/contact', label: 'Contact Us' }
  ];

  return (
    <nav className={`${styles.navbar} ${scrollPosition > 50 ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.navbarContent}>
          {/* Logo */}
          <a href="/newpage/home" className={styles.logo} onClick={closeMenu}>
            <Image
              src="/logo.png"
              alt="Brand Logo"
              width={150}
              height={50}
              className={styles.logoImage}
            />
          </a>

          {/* Desktop Nav */}
          <div className={styles.desktopMenu}>
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={closeMenu}
                className={styles.navLink}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={toggleMenu}
            className={styles.hamburger}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.line1Open : ''}`} />
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.line2Open : ''}`} />
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.line3Open : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuInner}>
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={closeMenu}
              className={styles.mobileNavLink}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
