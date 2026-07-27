import React, { useState } from "react";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import { Outlet } from "react-router";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import Register from "./Register/Register";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("Авто Электрик");

  const openModal = (course = "Авто Электрик") => {
    setSelectedCourse(course);
    setIsOpen(true);
  };

  return (
    <>
      <Header openModal={() => openModal("Авто Электрик")} />

      <Aside openModal={() => openModal("Авто Электрик")} />

      <main>
        <Outlet context={{ openModal }} />
        <Contact />
      </main>

      <Footer />

      <Register
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultCourse={selectedCourse}
      />
    </>
  );
};

export default Layout;