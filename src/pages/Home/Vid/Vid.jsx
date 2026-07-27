import React from 'react'
import "./Vid.css"
import auto from "../../../assets/auto.png"
import elektro from "../../../assets/elektro.png"
import chip from "../../../assets/chip.png"
import { Link } from "react-router";

const Vid = () => {
	return (
		<section className="courses" id="courses">

      <div className="container">

        <div className="section-title">
          <h2>Биздин курстар</h2>
          <p>
            Теория + Практика + Сертификат + Жумушка орношууга жардам
          </p>
        </div>

        <div className="courses-grid">

          <div className="course-card">

            <img src={auto} alt="" />

            <div className="course-info">
              <h3>Авто Электрик</h3>

              <p>
                Автоунаалардын электр системаларын диагностика кылуу,
                оңдоо жана практикалык окуу.
              </p>

              <Link to="/catalog/auto">
  <button>Кененирээк</button>
</Link>
            </div>

          </div>

          <div className="course-card">

            <img src={elektro} alt="" />

            <div className="course-info">
              <h3>Электро Монтаж</h3>

              <p>
                Үй жана өндүрүш электр монтаждарын
                толугу менен үйрөнүңүз.
              </p>

              <Link to="/catalog/elektro">
  <button>Кененирээк</button>
</Link>
            </div>

          </div>

          <div className="course-card">

            <img src={chip} alt="" />

            <div className="course-info">
              <h3>Чип-Тюнинг</h3>

              <p>
                ECU программалоо, диагностика жана
                профессионалдык чип-тюнинг.
              </p>

              <Link to="/catalog/chip">
  <button>Кененирээк</button>
</Link>
            </div>

          </div>

        </div>

      </div>

    </section>
	)
};

export default Vid