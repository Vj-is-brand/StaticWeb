import React from "react";
import "./Hamburger.scss";

const Hamburger = ({ menu,isMenuOpen }) => {
    console.log(menu,"in the hamburger")
  return (
    <>
       {isMenuOpen && (
        <ul className="dropdown-menu">
          {menu.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Hamburger;
