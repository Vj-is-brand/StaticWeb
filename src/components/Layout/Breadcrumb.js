import React from "react";
import "../../App.scss";

const Breadcrumb = ({ path }) => {
  return (
    <>
      <div className="breadcrumb">
        {path.map((item, index) => (
          <span key={index} className="breadcrumb-item">
            {item}{" "}
            {index !== path.length - 1 && (
              <span className="separator">&gt;</span>
            )}{" "}
          </span>
        ))}
      </div>
    </>
  );
};

export default Breadcrumb;
