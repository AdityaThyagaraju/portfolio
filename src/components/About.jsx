import React from "react";
import textBg from "../images/3392075.jpg";
import dp from "../images/jeremy-bishop-_CFv3bntQlQ-unsplash.jpg";

function About(){
    return <div className="section p-5 width-sm">
    <div className="row">
      <div className="col-lg-6 p-3 name-qual">
        <div
          className="info"
          style={{ backgroundImage: `url(${textBg})` }}
        >
          <h1>Aditya Thyagaraju</h1>
          <h3>B E (Computer Science)</h3>
        </div>
      </div>
      <div className="col-lg-6 pd-2 d-flex justify-content-center align-text-center">
        <img src={dp} id="dp"></img>
      </div>
    </div>
    <p className="container text">
      Effective Student committed to learning, developing skills in
      computer science and team contribution.<br></br> Self-directed and
      energetic with superior performance in both autonomous or
      collaborative <br></br>
      environments working independently and collaborating with others
      on group projects.<br></br> Energetic student eager to apply
      knowledge of project coordination and completion to achieve
      company goals.<br></br> Dedicated to working hard to make positive
      contributions. Motivated individual with strong work ethic and
      working independently. Strong organizational and team
      collaboration skills with experience in improving processes.
    </p>
    <a href="#" className="cv-link mx-auto mt-5 d-block">
      Download CV
    </a>
  </div>
}

export default About;