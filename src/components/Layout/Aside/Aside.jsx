import React from "react";
import hero from "../../../assets/header.png";
import "./Aside.css";

const Aside = ({ openModal }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-left">

          <span className="hero-badge">
            ⚡ Электро Адис окуу борбору
          </span>

          <h1>
            Биздин миссия:
            <br />
            <span>
              Кыска убакытта мыкты
              кесипкөй адистерди
              даярдап чыгаруу
            </span>
          </h1>

          <p>
            Авто Электрик, Электро Монтаж жана
            Чип-Тюнинг боюнча заманбап теориялык
            жана практикалык окуу борбору.
          </p>

          <div className="hero-buttons">

            <button
              className="btn-yellow"
              onClick={openModal}
            >
              Азыр катталуу
            </button>

            <a
              href="#courses"
              className="btn-outline"
            >
              Курстарды көрүү
            </a>

          </div>

          <div className="hero-info">

            <div className="hero-card">
              <h2>3000+</h2>
              <span>Бүтүрүүчү</span>
            </div>

            <div className="hero-card">
              <h2>10+</h2>
              <span>Жылдык тажрыйба</span>
            </div>

            <div className="hero-card">
              <h2>80%</h2>
              <span>Практикалык окуу</span>
            </div>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={hero}
            alt="Электро Адис"
            className="hero-image"
          />

        </div>

      </div>
    </section>
  );
};

export default Aside;