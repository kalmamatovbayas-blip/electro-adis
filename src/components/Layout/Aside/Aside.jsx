import React from "react";
import hero from "../../../assets/hero.png";
import "./Aside.css";

const Aside = ({ openModal }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-left">

          <h1>
            Биздин миссия: <br />
            <span>
              Кыска убакыта мыкты кесипкөй адистерди даярдап чыгаруу
            </span>
          </h1>

          <p>
            Авто Электрик, Электро Монтаж жана Чип-Тюнинг боюнча
            практикалык окуу борбору.
          </p>

          <div className="hero-buttons">

            <button
              className="btn-yellow"
              onClick={openModal}
            >
              Катталуу
            </button>

            <a href="#courses" className="btn-outline">
              Курстар
            </a>

          </div>

          <div className="hero-info">

            <div>
              <h2>3000+</h2>
              <span>Бүтүрүүчү</span>
            </div>

            <div>
              <h2>10+</h2>
              <span>Жылдык тажрыйба</span>
            </div>

            <div>
              <h2>80%</h2>
              <span>Практика</span>
            </div>

          </div>

        </div>

        <div className="hero-right">
          <img src={hero} alt="Hero" />
        </div>

      </div>
    </section>
  );
};

export default Aside;