import "./About.css";
import {
  FaBolt,
  FaCertificate,
  FaTools,
  FaUserGraduate,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="features">

      <div className="title">
        <h2>Эмне үчүн Электро Адис?</h2>
        <p>Биздин окуу борбордун артыкчылыктары</p>
      </div>

      <div className="features-grid">

        <div className="feature-card">
          <FaTools className="icon"/>
          <h3>80% Практика 20% Теория</h3>
          <p>Ар бир студент чыныгы жабдуулар менен иштейт.</p>
        </div>

        <div className="feature-card">
          <FaBolt className="icon"/>
          <h3>Заманбап жабдуулар</h3>
          <p>Акыркы технологиялар менен окуу өткөрүлөт.</p>
        </div>

        <div className="feature-card">
          <FaCertificate className="icon"/>
          <h3>Сертификат</h3>
          <p>Курсту аяктагандан кийин сертификат берилет.</p>
        </div>

        <div className="feature-card">
          <FaUserGraduate className="icon"/>
          <h3>Жумушка жардам</h3>
          <p>Бүтүрүүчүлөрдү жумушка орношууга колдоо көрсөтөбүз.</p>
        </div>

      </div>

    </section>
  );
};

export default About;