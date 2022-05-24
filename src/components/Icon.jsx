import React, { useState, useEffect } from "react";
import "../styles/Icon.css";

export default function Icon({iconIMG, title}) {



  return (
    <div className="iconContainer">
        <img src={iconIMG} alt={title} className="iconImage" />
        <p className="iconName">{title}</p>
    </div>
  );
}