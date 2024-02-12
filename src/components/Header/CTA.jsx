import React from "react";
import Resume from "../../assets/Mohammed Iqbal Mech.pdf";
import "./headerStyles.css";
const CTA = () => {
  return (
    <div className="cta" style={{ display: "flex" }}>
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Lets talk{" "}
      </a>
    </div>
  );
};

export default CTA;
