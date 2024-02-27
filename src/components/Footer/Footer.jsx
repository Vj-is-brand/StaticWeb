import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <h3>CATEGORIES</h3>
          <p>Web Builders</p>
          <p>Hosting</p>
          <p>Data Center</p>
          <p>Robotic Automation</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Privacy Policy</p>
          <p>Terms Of Service</p>
          <p>Categories</p>
          <p>About</p>
        </div>
        <div className="states-option">
          {/* <select>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="unitedkingdom">United Kingdom</option>
            <option value="australia">Australia</option>
          </select> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
