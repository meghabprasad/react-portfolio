import React from "react";
import "./style.css"

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}id="skills-content">
      <div className="section-content" id={id}>
        
      </div>
    </div>
  );
}
