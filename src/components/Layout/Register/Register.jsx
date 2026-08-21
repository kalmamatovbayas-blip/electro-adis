import { useState, useEffect } from "react";
import "./Register.css";

const Register = ({ isOpen, onClose, defaultCourse }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    course: defaultCourse || "Авто Электрик",
    comment: "",
  });

  useEffect(() => {
    if (defaultCourse) {
      setFormData((prev) => ({
        ...prev,
        course: defaultCourse,
      }));
    }
  }, [defaultCourse]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullname,
          phone: formData.phone,
          course: formData.course,
          comment: formData.comment,
        }),
      });

      const data = await response.json();

      if (data.ok) {
        alert("✅ Катталуу ийгиликтүү болду!");

        setFormData({
          fullname: "",
          phone: "",
          course: defaultCourse || "Авто Электрик",
          comment: "",
        });

        onClose();
      } else {
        alert("❌ Телеграмга жөнөтүүдө ката кетти!");
        console.log(data);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Сервер менен байланышкан жок!");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Курска катталуу</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            placeholder="Аты-жөнү"
            value={formData.fullname}
            onChange={handleChange}
            required
          />

          <input
  type="tel"
  name="phone"
  placeholder="+996 500 000 000"
  value={formData.phone}
  onChange={(e) => {
    const value = e.target.value.replace(/[^0-9+]/g, "");
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  }}
  inputMode="numeric"
  pattern="[0-9+]*"
  maxLength={13}
  required
/>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option>Авто Электрик</option>
            <option>Электро Монтаж</option>
            <option>Чип-Тюнинг</option>
          </select>

          <textarea
            name="comment"
            placeholder="Комментарий..."
            value={formData.comment}
            onChange={handleChange}
          />

          <button type="submit" className="send-btn">
            Жөнөтүү
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;