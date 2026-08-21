import "./ElektroCatalog.css";
import { Link, useOutletContext } from "react-router";

import elektro from "../../assets/tok.mp4";
import gallery1 from "../../assets/gallery1.png";
import gallery3 from "../../assets/gallery3.png";
import gallery5 from "../../assets/gallery5.png";
import qr from "../../assets/qrcode.svg";

const ElektroCatalog = () => {
  const { openModal } = useOutletContext();

  return (
    <section className="elektro-page">

      <div className="elektro-container">

        <Link className="elektro-back-btn" to="/">
          ← Башкы бетке кайтуу
        </Link>

        <div className="elektro-hero">

          <div className="elektro-left">

            <h1>⚡ Электро Монтаж</h1>

            <p>
              Кесип үйрөн — Келечегиңди бүгүн башта!
            </p>

  <div className="gallery-card">
  <video
    controls
    preload="metadata"
    className="gallery-video"
  >
    <source src={elektro} type="video/mp4" />
  </video>
</div>

          </div>

          <div className="elektro-right">

            <div className="elektro-price-card">

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

        <div className="elektro-info-box">

          <h2>Биз жөнүндө</h2>

          <p>
            Электро Адис окуу борборунда Электро Монтаж курсу аркылуу
            үйдүн жана өндүрүштүк объектилердин электр монтажын толугу
            менен үйрөнөсүз. Сабактар теория жана практика менен өткөрүлөт.
            Окуу заманбап шаймандар менен жүргүзүлүп, ар бир студент
            чыныгы объектилерде иштеп тажрыйба топтойт.
          </p>

        </div>

        <div className="elektro-info-box">

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

        <div className="elektro-info-box">

          <h2>Окууда өтүлүүчү темалар</h2>

          <div className="elektro-lesson-grid">

            <div>✔ Электр коопсуздугу</div>
            <div>✔ Кабель тартуу</div>
            <div>✔ Автомат орнотуу</div>
            <div>✔ Электр щиттерин чогултуу</div>
            <div>✔ Розетка орнотуу</div>
            <div>✔ Өчүргүчтөр</div>
            <div>✔ Жарыктандыруу</div>
            <div>✔ Практика</div>

          </div>

        </div>

        <div className="elektro-info-box">

          <h2>Окуу программасы</h2>

          <div className="elektro-program">

            <div className="elektro-program-card">
              <h3>1-жума</h3>
              <p>Электр коопсуздугу жана теория.</p>
            </div>

            <div className="elektro-program-card">
              <h3>2-жума</h3>
              <p>Кабель тартуу жана электр схемалары.</p>
            </div>

            <div className="elektro-program-card">
              <h3>3-жума</h3>
              <p>Автоматтар, щиттер жана розеткаларды орнотуу.</p>
            </div>

            <div className="elektro-program-card">
              <h3>4-жума</h3>
              <p>Үйдүн толук электр монтажын практикалык жасоо.</p>
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

        <div className="elektro-gallery">

          <h2>Практикалык сабактар</h2>

          <div className="elektro-gallery-grid">

            <img src={gallery3} alt="Практика 1" />
            <img src={gallery1} alt="Практика 2" />
            <img src={gallery5} alt="Практика 3" />

          </div>

        </div>

      </div>

    </section>
  );
};

export default ElektroCatalog;