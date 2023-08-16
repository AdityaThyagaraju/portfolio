import React from "react";
import About from "./About";
import Project from "./Project";
import Divider from "./Divider";
import Skills from "./Skills";
import Contact from "./Contact";
import Certification from "./Certification";

function ScrollPane() {
  return (
    <div className="flex-pane d-flex justify-content-center">
      <div className="scroll-pane">
        <h3 className="section-headings">About</h3>
        <About />
        <Divider heading="Projects" />
        <Project />
        <Divider heading="Skills" />
        <Skills />
        <Divider heading="Certifications" />
        <Certification />
        <Divider />
        <Contact />
      </div>
    </div>
  );
}

export default ScrollPane;
