import "./AutoCatalog.css";
import { Link, useOutletContext } from "react-router";

import auto from "../../assets/electrovideo.mp4";
import gallery1 from "../../assets/STR.png";
import gallery3 from "../../assets/STENT.png";
import gallery5 from "../../assets/PRACTICA.png";
import qr from "../../assets/qrcode.svg";

const AutoCatalog = () => {

  const { openModal } = useOutletContext();

  return (
    <section className="auto-page">

      <div className="auto-container">

        <Link className="auto-back-btn" to="/">
          ← Башкы бетке кайтуу
        </Link>

        <div className="auto-hero">

          <div className="auto-left">

            <h1>🚗 Авто Электрик</h1>

            <p>
              Кесип үйрөн — Келечегиңди бүгүн башта!
            </p>

             <div className="gallery-card">
              <video
                controls
                preload="metadata"
                className="gallery-video"
              >
                <source src={auto} type="video/mp4" />
              </video>
            </div>

          </div>

          <div className="auto-right">

            <div className="auto-price-card">

              <h2>35 000 сом</h2>

              <p>⏳ Окуу мөөнөтү: <b>2.5 ай</b></p>

              <p>🛠 80% Практика</p>

              <p>🎓 Мамлекеттик сертификат</p>

              <p>🌍 Эл аралык сертификат</p>

              <button onClick={openModal}>
                Катталуу
              </button>

            </div>

          </div>

        </div>

        <div className="auto-info-box">

          <h2>Биз жөнүндө</h2>

          <p>
            Электро Адис окуу борбору автоэлектрик,
            электро монтаж жана чип-тюнинг багыттары боюнча
            теориялык жана практикалык билим берет.
            Биздин негизги максат — студенттерди жумушка даяр,
            заманбап адис катары чыгаруу.
          </p>


        </div>

        <div className="auto-info-box">

          <h2>Эмне үчүн биз?</h2>

          <ul>

            <li>✅ Тажрыйбалуу устаттар</li>

            <li>✅ 80% практикалык сабактар</li>

            <li>✅ Заманбап жабдуулар</li>

            <li>✅ Мамлекеттик жана эл аралык сертификат</li>

            <li>✅ Жумушка орношууга жардам</li>

            <li>✅ Ар бир студент менен өзүнчө иштөө</li>

          </ul>

        </div>

        <div className="auto-info-box">

          <h2>Окууда өтүлүүчү темалар</h2>

          <div className="auto-lesson-grid">

            <div>✔ Диагностика</div>

            <div>✔ Стартер</div>

            <div>✔ Генератор</div>

            <div>✔ Аккумулятор</div>

            <div>✔ ECU</div>

            <div>✔ CAN BUS</div>

            <div>✔ Электр схемалары</div>

            <div>✔ Практика</div>

          </div>

        </div>

        <div className="auto-info-box">

          <h2>Окуу программасы</h2>

          <div className="auto-program">

            <div className="auto-program-card">
              <h3>1-жума</h3>
              <p>Электрдин негиздери жана коопсуздук эрежелери.</p>
            </div>

            <div className="auto-program-card">
              <h3>2-жума</h3>
              <p>Аккумулятор, генератор жана стартер.</p>
            </div>

            <div className="auto-program-card">
              <h3>3-жума</h3>
              <p>Сканер менен диагностика жүргүзүү.</p>
            </div>

            <div className="auto-program-card">
              <h3>4-жума</h3>
              <p>Чыныгы автоунаалар менен практика.</p>
            </div>

          </div>

        </div>

        <div className="auto-info-box">
  <div className="certificate-content">
    <div className="certificate-text">
      <h2>Сертификат</h2>

      <p>
        Курсту ийгиликтүү аяктаган студенттерге сертификат
        кыргыз, орус жана англис тилдеринде берилет.
        Сертификат мамлекет тарабынан берилет жана
        эл аралык деңгээлде жарактуу болуп саналат.
      </p>
    </div>

    <div className="certificate-qr">
    <img src={qr} alt="QR Code" />
    <span>QR кодду сканерлеңиз</span>
</div>
  </div>
</div>

        <div className="auto-gallery">

          <h2>Практикалык сабактар</h2>

          <div className="auto-gallery-grid">

            <img src={gallery1} alt="gallery" />

            <img src={gallery3} alt="gallery" />

            <img src={gallery5} alt="gallery" />

          </div>

        </div>

      </div>

    </section>
  );
};

export default AutoCatalog;