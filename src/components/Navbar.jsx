import { useEffect, useRef, useState } from "react";
import "../styles/Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Sermons", href: "#sermons" },
  { label: "Events", href: "#events" },
  // { label: "Outreach", href: "#outreach" },
  // { label: "Resources", href: "#resources" },
];

function MenuIcon({ isOpen }) {
  return (
    <span className={`menu-icon ${isOpen ? "is-open" : ""}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  // Detect when the visitor scrolls beyond 80px.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock background scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-is-open");
    };
  }, [menuOpen]);

  // Close the mobile menu with Escape.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        className={`site-header ${isScrolled ? "is-scrolled" : ""} ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <nav className="church-navbar" aria-label="Main navigation">
          <div className="navbar-inner container-fluid">
            {/* Church logo */}
            <a
              href="#home"
              className="church-brand"
              aria-label="New Covenant Baptist Church home"
              onClick={closeMenu}
            >
              <img
                src="/Images/NCBC-LOGO.png"
                alt="New Covenant Baptist Church"
                className="brand-logo"
              />
            </a>

            {/* Desktop navigation links */}
            <div className="desktop-navigation">
              <ul className="nav-list">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a className="nav-link" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Plan Your Visit button */}
            <a href="#visit" className="visit-button">
              Plan Your Visit
            </a>

            {/* Mobile menu toggle */}
            <button
              ref={menuButtonRef}
              type="button"
              className="mobile-menu-toggle"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <MenuIcon isOpen={menuOpen} />
            </button>
          </div>
        </nav>

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className={`mobile-navigation ${
            menuOpen ? "mobile-navigation-open" : ""
          }`}
          aria-hidden={!menuOpen}
          inert={!menuOpen}
        >
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#visit" className="mobile-visit-button" onClick={closeMenu}>
            Plan Your Visit <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>
    </>
  );
}
