import "./Contact.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <div className="section-title">
        <h2>Биз менен байланышыңыз</h2>
        <p>Суроолоруңуз болсо, бизге кайрылыңыз</p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="contact-card">
            <FaPhoneAlt className="contact-icon"/>
            <div>
              <h3>Телефон</h3>
              <p>+996 550 711 808</p>
            </div>
          </div>

          <div className="contact-card">
  <FaWhatsapp className="contact-icon" />

  <div>
    <h3>WhatsApp</h3>

    <a
      href="https://wa.me/996509798765"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-link"
    >
      +996 509 798 765
    </a>
  </div>
</div>

          <div className="contact-card">
  <FaInstagram className="contact-icon" />

  <div>
    <h3>Instagram</h3>

    <a
      href="https://www.instagram.com/electro.adis_manas/"
      target="_blank"
      rel="noopener noreferrer"
      className="instagram-link"
    >
      @electro.adis_manas
    </a>
  </div>
</div>

          <div className="contact-card">
  <FaMapMarkerAlt className="contact-icon" />

  <div>
    <h3>Дарек</h3>

    <a
      href="https://yandex.com/maps/10312/djalal-abad/house/Y0sYfw9kTUMGQFpqfXV1dX1gZg==/?ll=72.984461%2C40.944132&z=16.67"
      target="_blank"
      rel="noopener noreferrer"
      className="location-link"
    >
      Кыргызстан, Манас шаары, Бекмамата Осмонова, 116Е
    </a>
  </div>
</div>

        </div>

        <div className="contact-map">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>

        </div>

      </div>

    </section>
  );
};

export default Contact;