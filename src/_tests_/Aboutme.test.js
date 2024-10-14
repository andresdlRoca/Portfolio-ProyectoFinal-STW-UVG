/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react"
import React from "react"
import Aboutme from "../components/Aboutme"
 
describe("Testing Page IntroPage", ()=> { 
 
	it("Render About Me Window", () => { 
		render(<Aboutme/>) 
		const testElement = screen.getByTestId("AboutMeWindow-test")
		expect(testElement).toBeInTheDocument()
	})
 
})