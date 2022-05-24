import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import palicoBtn from "../assets/palicoicon.png";

export default function NavBar() {
    
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval( () => tick(), 1000);
        return function cleanup() {
            clearInterval(timer);
        }
    });

    function tick() {
        setDate(new Date());
    }

    

  return (
    <div className="navbar-container">
        <div className="homebutton">
            <img src={palicoBtn} alt="Palico home button" />
        </div>
        <div className="iconPlace"></div>
        <div className="hourDisplay">
            <p>{date.toLocaleTimeString()}</p>
        </div>
    </div>

  );
}