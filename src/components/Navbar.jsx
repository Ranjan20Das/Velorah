import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Expeditions', href: '#expeditions' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Booking', href: '#booking' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#" className="brand">
            Velorah<sup>®</sup>
          </a>

          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#booking"
            className="liquid-glass nav-cta"
            onClick={(e) => handleLinkClick(e, '#booking')}
            style={{ display: 'none' }}
            data-desktop-only=""
          >
            Start Journey
          </a>

          {/* Desktop CTA */}
          <a
            href="#booking"
            className="liquid-glass nav-cta desktop-cta"
            onClick={(e) => handleLinkClick(e, '#booking')}
          >
            Start Journey
          </a>

          {/* Mobile hamburger */}
          <button
            className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#booking"
          className="liquid-glass nav-cta"
          style={{ marginTop: '1rem' }}
          onClick={(e) => handleLinkClick(e, '#booking')}
        >
          Start Journey
        </a>
      </div>
    </>
  );
}
