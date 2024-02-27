import React from "react";
import "../../App.scss";

const Feature = () => {
  const features = [
    "Tools",
    "AWS Builder",
    "Start Build",
    "Build Supplies",
    "Tooling",
    "BlueHoisting",
  ];
  return (
    <>
      <div className="btn-group">
        {features.map((feature, i) => (
          <button key={i} id={`${feature}-tab`} className="btn btn-outline-primary">{feature}</button>
      ))}
      </div>
    </>
  );
};
export default Feature;
