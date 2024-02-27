import React, { useState } from "react";
import Hamburger from "../Hamburger/Hamburger.jsx";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import "../../components/Hamburger/Hamburger.scss";
import "./Header.scss";

const Header = ({ menu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);
  const toggleMenu = () => {
    console.log("clicked");
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="header">
        <div className="search-container">
          <input type="search" />
          <FaMagnifyingGlass class="icon" />
        </div>
        <div
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <FaBars />
        </div>
        <Hamburger menu={menu} isMenuOpen={isMenuOpen} />
        <ul className="nav-links">
          {menu.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
