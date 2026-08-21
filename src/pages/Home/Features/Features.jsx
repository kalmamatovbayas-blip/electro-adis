import "./Features.css";
import about from "../../../assets/about.png";

const Features  = () => {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-image">
          <img src={about} alt="Электро Адис" />
        </div>

        <div className="about-content">

          <span>Биз жөнүндө</span>

          <h2>
            Электро Адис окуу борбору
          </h2>

          <p>
            Биздин окуу борбор Авто Электрик, Электро Монтаж жана
            Чип-Тюнинг боюнча заманбап теориялык жана практикалык
            билим берет. Ар бир студент чыныгы жабдуулар менен
            иштеп, кесипти толук өздөштүрөт.
          </p>

          <div className="about-boxes">

            <div className="box">
              <h3>10+</h3>
              <p>Жылдык тажрыйба</p>
            </div>

            <div className="box">
              <h3>3000+</h3>
              <p>Бүтүрүүчү</p>
            </div>

            <div className="box">
              <h3>80%</h3>
              <p>Практикалык окуу</p>
            </div>

          </div>

 <a
  href="/files/ElectroAdis.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="download-btn"
>
  📄 Каталогду ачуу
</a>

        </div>

      </div>

    </section>
  );
};

export default Features  ;