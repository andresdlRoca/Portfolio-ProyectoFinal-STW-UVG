import React from "react"
import startupIMG from "../assets/startupcat.gif"
import "../styles/introPage.css"

export default function IntroPage() {
	return (
		<div className="introOverlay">
			<img src={startupIMG} alt="cat winking" className="startupcat" />
			<p className="titleIntro">dlrOS<span id="under"> V1.0 </span></p>
			<p className="subtitleIntro">Copyright (c) Andrés de la Roca. 2022</p>
		</div>
	)
}