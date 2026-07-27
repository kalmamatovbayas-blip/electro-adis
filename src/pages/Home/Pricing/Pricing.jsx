import "./Pricing.css";

const Pricing = ({ openModal }) => {
  return (
    <section className="pricing" id="pricing">

      <div className="section-title">
        <h2>Курстардын баалары</h2>
        <p>Өзүңүзгө ылайыктуу курсту тандаңыз</p>
      </div>

      <div className="pricing-container">

        <div className="price-card">

          <h3>⚡ Электро Монтаж</h3>

          <h1>35 000 сом</h1>

          <ul>
            <li>✔️ 2.5 ай окуу</li>
            <li>✔️ Практикалык сабак</li>
            <li>✔️ Теория сабак</li>
            <li>✔️ Сертификат</li>
          </ul>

          <button onClick={() => openModal("Электро Монтаж")}>
            Катталуу
          </button>

        </div>

        <div className="price-card active">

          <span className="badge">Эң популярдуу</span>

          <h3>🚗 Авто Электрик</h3>

          <h1>35 000 сом</h1>

          <ul>
            <li>✔️ 2.5 ай окуу</li>
            <li>✔️ 80% практика</li>
            <li>✔️ 20% теория</li>
            <li>✔️ Сертификат</li>
          </ul>

          <button onClick={() => openModal("Авто Электрик")}>
            Катталуу
          </button>

        </div>

        <div className="price-card">

          <h3>💻 Чип-Тюнинг</h3>

          <h1>25 000 сом</h1>

          <ul>
            <li>✔️ ECU диагностика</li>
            <li>✔️ Чип жазуу</li>
            <li>✔️ Практика</li>
            <li>✔️ Сертификат</li>
          </ul>

          <button onClick={() => openModal("Чип-Тюнинг")}>
            Катталуу
          </button>

        </div>

      </div>

    </section>
  );
};

export default Pricing;