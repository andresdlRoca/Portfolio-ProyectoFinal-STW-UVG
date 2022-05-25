import React, { useState, useEffect } from "react";
import "../styles/Window.css";
import Spotify from "react-spotify-embed";
import YouTube from "react-youtube";

export default function Window({ name, windowName }) {
    
  return (
    <div className="windowContainer">
        {windowName}
            <div className={name === "pcIcon" ? "windowContent about visible" : "nonvisible"}>
                About Me                    
            </div>
            <div className={name === "Projects" ? "windowContent projects visible" : "nonvisible"}>
                Projects
            </div>
            <div className={name === "Lofi" ? "windowContent lofi visible" : "nonvisible"}>
                <Spotify link="https://open.spotify.com/playlist/60fjgeg72OSnHnVa4im6oq?si=78aea5b1b12248bb"/>
            </div>
            <div className={name === "wallpaper" ? "windowContent wallpaper visible" : "nonvisible"}>
                wallpaper
            </div>
            <div className={name === "smt" ? "windowContent smt visible" : "nonvisible"}>
                <YouTube videoId="-Y9ozjlhrj8"/>
            </div>
            <div className={name === "mario" ? "windowContent mario visible" : "nonvisible"}>
                <YouTube videoId="JHlUEJXaxfY"/>
            </div>
    </div>

  );
}