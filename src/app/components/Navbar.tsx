'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const isBottom = currentScrollY + windowHeight >= docHeight - 10;

      if (isBottom) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${!showNavbar ? styles.hide : ''}`}>
      <nav className={styles.nav}>
        <h1
          style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#5b4a3e',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            lineHeight: '1.2',
          }}
        >
          Muhammad Alrio Bagaskara
        </h1>

        <button onClick={toggleMenu} aria-label="Toggle menu" className={styles.hamburger}>
          <span />
          <span />
          <span />
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                onClick={handleLinkClick}
                style={{
                  fontSize: '1.1rem',
                  padding: '8px 16px',
                  color: '#5b4a3e',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#bfa06b';
                  (e.currentTarget as HTMLElement).style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = '#5b4a3e';
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
