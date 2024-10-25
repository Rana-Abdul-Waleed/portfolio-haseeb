import React, { useState } from "react";
import "./Navbar.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [hamMenu, setHamMenu] = useState(false);

  return (
    <div className="navbar">
      <h2 className="logo">Haseeb</h2>
      <ul className="menu-items">
        <a
          href="#home"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setMenu("about")}
          className={menu === "about" ? "active" : ""}
        >
          About me
        </a>
        <a
          href="#education"
          onClick={() => setMenu("education")}
          className={menu === "education" ? "active" : ""}
        >
          Education
        </a>
        <a
          href="#experience"
          onClick={() => setMenu("experience")}
          className={menu === "experience" ? "active" : ""}
        >
          Experience
        </a>
        <a
          href="#achievements"
          onClick={() => setMenu("achievements")}
          className={menu === "achievements" ? "active" : ""}
        >
          Achievements
        </a>
      </ul>

      <a href="#contact" onClick={() => setMenu("contact")} className="contact">
        Contact me
        <FaArrowRightLong />
      </a>
      <GiHamburgerMenu className="ham-menu" />
    </div>
  );
};

export default Navbar;
