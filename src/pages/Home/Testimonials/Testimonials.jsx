import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="testimonials">

      <div className="section-title">
        <h2>Окуучулардын пикирлери</h2>
        <p>Биздин бүтүрүүчүлөрдүн ой-пикирлери</p>
      </div>

      <div className="testimonial-container">

        <div className="testimonial-card">

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            Авто Электрик курсун аяктагандан кийин
            дароо жумушка орноштум.
            Сабактар түшүнүктүү жана толугу менен практика болду.
          </p>

          <h3>Айбек Т.</h3>

        </div>

        <div className="testimonial-card">

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            Электро Монтаж курсунда көп нерсени үйрөндүм.
            Азыр өз алдынча заказ алып иштеп жатам.
          </p>

          <h3>Бектур А.</h3>

        </div>

        <div className="testimonial-card">

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            Чип-Тюнинг боюнча мыкты курс.
            Практикасы абдан күчтүү экен.
          </p>

          <h3>Нурбек С.</h3>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;