import "./Footer.css";
import logo from "../../../assets/headerlogo.png";

import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">

          <img src={logo} alt="logo" className="footer-logo" />

          <p>
            Авто Электрик, Электро Монтаж жана
            Чип-Тюнинг боюнча заманбап окуу борбору.
          </p>

        </div>

        <div className="footer-box">

          <h3>Меню</h3>

          <a href="#home">Башкы бет</a>
          <a href="#courses">Курстар</a>
          <a href="#about">Биз жөнүндө</a>
          <a href="#gallery">Галерея</a>
          <a href="#contact">Байланыш</a>

        </div>

        <div className="footer-box">

          <h3>Байланыш</h3>

          <a href="tel:+996700000000">
            <FaPhoneAlt /> +996 550 711 808
          </a>

          <a
            href="https://wa.me/996550711808"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="https://www.instagram.com/electro.adis_manas/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram /> Instagram
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF /> Facebook
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Электро Адис. Бардык укуктар корголгон.

      </div>

    </footer>
  );
};

export default Footer;