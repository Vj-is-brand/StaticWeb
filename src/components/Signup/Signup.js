import React from "react";
import "./Signup.scss"

const Signup = () => {
  return <>
    <div className="signup-container">
      <p className="signup-title">Sign up and get exclusive special deals</p>
      <div>
      <input type="text" className="signup-form-container"/>
      <button className="signup-btn">SignUp</button>
      </div>
    </div>
  </>;
};

export default Signup;
