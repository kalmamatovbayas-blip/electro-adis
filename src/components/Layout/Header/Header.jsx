import React, { useState } from "react";
import "./Header.css";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/headerlogo.png";
import { Link } from "react-router-dom";

const Header = ({ openModal }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>

      <div className="header-container">

        <Link to="/">
          <img src={logo} alt="Электро Адис" className="logo" />
        </Link>

        <nav className={menuOpen ? "nav active" : "nav"}>

          <a href="#home" onClick={() => setMenuOpen(false)}>Башкы бет</a>

          <a href="#courses" onClick={() => setMenuOpen(false)}>Курстар</a>

          <a href="#about" onClick={() => setMenuOpen(false)}>Биз жөнүндө</a>

          <a href="#gallery" onClick={() => setMenuOpen(false)}>Галерея</a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>Байланыш</a>

          <button
            className="mobile-register"
            onClick={() => {
              openModal();
              setMenuOpen(false);
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
        >
          {menuOpen ? <X size={30}/> : <Menu size={30}/>}
        </button>

      </div>

    </header>
  );
};

export default Header;