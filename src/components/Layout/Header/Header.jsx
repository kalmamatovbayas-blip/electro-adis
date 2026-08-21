import React, { useState, useEffect } from "react";
import "./Header.css";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/headerlogo.png";
import { Link } from "react-router-dom";

const Header = ({ openModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`header ${scrolled ? "scrolled" : ""} ${
          menuOpen ? "menu-open" : ""
        }`}
      >
        <div className="header-container">
          <Link to="/" className="logo-box" onClick={closeMenu}>
            <img
              src={logo}
              alt="Электро Адис"
              className="logo"
            />
          </Link>

          <nav className={menuOpen ? "nav active" : "nav"}>
            <a href="#home" onClick={closeMenu}>
              Башкы бет
            </a>

            <a href="#courses" onClick={closeMenu}>
              Курстар
            </a>

            <a href="#about" onClick={closeMenu}>
              Биз жөнүндө
            </a>

            <a href="#gallery" onClick={closeMenu}>
              Галерея
            </a>

            <a href="#contact" onClick={closeMenu}>
              Байланыш
            </a>

            <button
              className="mobile-register"
              onClick={() => {
                openModal();
                closeMenu();
              }}
            >
              Катталуу
            </button>
          </nav>

          <button
            className="register-btn"
            onClick={openModal}
          >
            Катталуу
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Header;