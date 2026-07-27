import "./Gallery.css";

import img1 from "../../../assets/adis1.jpeg";
import img3 from "../../../assets/adis2.jpeg";
import img5 from "../../../assets/adis3.jpeg";

import video1 from "../../../assets/video1.mp4";
import video2 from "../../../assets/video2.mp4";
import video3 from "../../../assets/video3.mp4";

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">

      <div className="gallery-title">
        <h2>Биздин Галерея</h2>
        <p>Практикалык окуудан сүрөттөр жана видеолор</p>
      </div>

      <div className="gallery-grid">

        <img src={img1} alt="" />

        <video controls>
          <source src={video1} type="video/mp4" />
        </video>

        <img src={img3} alt="" />

        <video controls>
          <source src={video2} type="video/mp4" />
        </video>

        <img src={img5} alt="" />

        <video controls>
          <source src={video3} type="video/mp4" />
        </video>

      </div>

    </section>
  );
};

export default Gallery;