import "./ChipCatalog.css";
import { Link, useOutletContext } from "react-router";

import chip from "../../assets/chip.png";
import gallery1 from "../../assets/gallery1.png";
import gallery3 from "../../assets/gallery3.png";
import gallery5 from "../../assets/gallery5.png";
import qr from "../../assets/qrcode.svg";

const ChipCatalog = () => {

  const { openModal } = useOutletContext();

  return (
    <section className="chip-page">

      <div className="chip-container">

        <Link className="chip-back-btn" to="/">
          ← Башкы бетке кайтуу
        </Link>

        <div className="chip-hero">

          <div className="chip-left">

            <h1>💻 Чип-Тюнинг</h1>

            <p>
              Кесип үйрөн — Келечегиңди бүгүн башта!
            </p>

            <img src={chip} alt="Чип-Тюнинг" />

          </div>

          <div className="chip-right">

            <div className="chip-price-card">

              <h2>25 000 сом</h2>

              <p>⏳ Окуу мөөнөтү: <b>2 ай</b></p>

              <p>🛠 80% Практика</p>

              <p>🎓 Мамлекеттик сертификат</p>

              <p>🌍 Эл аралык сертификат</p>

              <button onClick={openModal}>
                Катталуу
              </button>

            </div>

          </div>

        </div>

        <div className="chip-info-box">

          <h2>Биз жөнүндө</h2>

          <p>
            Электро Адис окуу борборунун Чип-Тюнинг курсу заманбап ECU
            программалоону, диагностиканы жана профессионалдык чип-тюнингди
            практикалык негизде үйрөтөт.
          </p>

        </div>

        <div className="chip-info-box">

          <h2>Эмне үчүн биз?</h2>

          <ul>

            <li>✅ Тажрыйбалуу устаттар</li>

            <li>✅ 80% практикалык сабактар</li>

            <li>✅ KESS жана KTAG менен иштөө</li>

            <li>✅ Мамлекеттик жана эл аралык сертификат</li>

            <li>✅ Жумушка орношууга жардам</li>

            <li>✅ Ар бир студент менен өзүнчө иштөө</li>

          </ul>

        </div>

        <div className="chip-info-box">

          <h2>Окууда өтүлүүчү темалар</h2>

          <div className="chip-lesson-grid">

            <div>✔ ECU негиздери</div>

            <div>✔ KESS</div>

            <div>✔ KTAG</div>

            <div>✔ PCM Flash</div>

            <div>✔ Stage 1</div>

            <div>✔ Stage 2</div>

            <div>✔ Диагностика</div>

            <div>✔ Практика</div>

          </div>

        </div>

        <div className="chip-info-box">

          <h2>Окуу программасы</h2>

          <div className="chip-program">

            <div className="chip-program-card">
              <h3>1-жума</h3>
              <p>ECU деген эмне? Анын түзүлүшү жана иштөө принциби.</p>
            </div>

            <div className="chip-program-card">
              <h3>2-жума</h3>
              <p>KESS жана KTAG жабдуулары менен иштөө.</p>
            </div>

            <div className="chip-program-card">
              <h3>3-жума</h3>
              <p>Прошивканы окуу, өзгөртүү жана кайра жазуу.</p>
            </div>

            <div className="chip-program-card">
              <h3>4-жума</h3>
              <p>Stage 1, Stage 2 жана чыныгы автоунаалар менен практика.</p>
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

        <div className="chip-gallery">

          <h2>Практикалык сабактар</h2>

          <div className="chip-gallery-grid">

            <img src={gallery5} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery1} alt="" />

          </div>

        </div>

      </div>

    </section>
  );
};

export default ChipCatalog;