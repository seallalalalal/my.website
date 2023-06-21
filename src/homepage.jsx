import React from "react";
import NavBar from "./widgets/navBar";
import About from "./widgets/sections/about";
import Section from "./widgets/section";
import "./css/homepage.css";
import Education from "./widgets/sections/education";
import { EDUCATION } from "./constant/nav";
import Experience from "./widgets/sections/experience";
export default function Homepage() {
  return (
    <>
      <NavBar />
      <div className="content">
        <Section title="About">
          <About />
        </Section>
        <Section title="Experience">
          <Experience />
        </Section>
        <Section title="Education">
          <Education value={EDUCATION} />
        </Section>
      </div>
    </>
  );
}
