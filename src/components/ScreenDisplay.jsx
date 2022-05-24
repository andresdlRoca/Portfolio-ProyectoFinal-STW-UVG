import React, { useState } from "react";
import "../styles/ScreenDisplay.css";
import Icon from "./icon";
import pcIcon from "../assets/pcIcon.png";
import marioIcon from "../assets/marioIcon.png";
import cdIcon from "../assets/cdIcon.gif";
import githubIcon from "../assets/githubicon.png";
import settingIcon from "../assets/settingsIcon.png";
import smtIcon from "../assets/smtIcon.png";
import folderIcon from "../assets/folderIcon.png";
import calcIcon from "../assets/calcIcon.png";
import pokeIcon from "../assets/pokeCard.gif";
import Window from "./Window";

export default function ScreenDisplay() {

  const handleWindow = (name) => {
    console.log("Create " + name +" window");
  }

  return (
        <div className="Display-container">
            <div className="iconrow">
              <div className="clickableDiv" onClick={() => handleWindow("pcIcon")}><Icon iconIMG={ pcIcon } title="Andres (C:)"/></div>
              <a href="https://github.com/andresdlRoca"><Icon iconIMG={ githubIcon } title="Github"/></a>
              <div className="clickableDiv" onClick={() => handleWindow("Projects")}><Icon iconIMG={ folderIcon } title="Projects"/></div>
              <div className="clickableDiv" onClick={() => handleWindow("Lofi")}><Icon iconIMG={ cdIcon } title="Lofi Beats to study"/></div>
              <div className="clickableDiv" onClick={() => handleWindow("wallpaper")}><Icon iconIMG={ settingIcon } title="Wallpaper"/></div>
              <div className="clickableDiv" onClick={() => handleWindow("smt")}><Icon iconIMG={ smtIcon } title="Shin Megami Tensei I"/></div>
              <div className="clickableDiv" onClick={() => handleWindow("mario")}><Icon iconIMG={ marioIcon } title="Super Mario Bros"/></div>
              <a href="http://stw-uvg-22.site:4025"><Icon iconIMG={ calcIcon } title="Calculator" /></a>
              <a href="http://stw-uvg-22.site:3521"><Icon iconIMG={ pokeIcon } title="PokeCards" /></a>
            </div>
        </div>

  );
}