import React, { useEffect } from "react";
import proj1img from "../images/proj1.jpg";
import proj1img2 from "../images/proj12.jpg";
import proj1img3 from "../images/proj13.jpg";
import ProjectCarousel from "./ProjectCarousel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

var projCardInfo = [
  {
    title:'Automobile servicing web application',
    img1:proj1img,
    img2:proj1img2,
    img3:proj1img3,
    desc:'An automobile servicing web application is a tool that allows users to schedule and manage their vehicle maintenance and repairs online.'
  },
  {
    title:'Automobile servicing web application',
    img1:proj1img,
    img2:proj1img2,
    img3:proj1img3,
    desc:'An automobile servicing web application is a tool that allows users to schedule and manage their vehicle maintenance and repairs online.'
  },
  {
    title:'Automobile servicing web application',
    img1:proj1img,
    img2:proj1img2,
    img3:proj1img3,
    desc:'An automobile servicing web application is a tool that allows users to schedule and manage their vehicle maintenance and repairs online.'
  },
  {
    title:'Automobile servicing web application',
    img1:proj1img,
    img2:proj1img2,
    img3:proj1img3,
    desc:'An automobile servicing web application is a tool that allows users to schedule and manage their vehicle maintenance and repairs online.'
  },
  {
    title:'Automobile servicing web application',
    img1:proj1img,
    img2:proj1img2,
    img3:proj1img3,
    desc:'An automobile servicing web application is a tool that allows users to schedule and manage their vehicle maintenance and repairs online.'
  }
]

export default function HorizontalScroll(){
    return <div className="Horizontal-scroll">
    {
      projCardInfo.map((proj,index)=>(
        <div className=" carousel-div d-flex justify-content-center align-items-center flex-column">
        <ProjectCarousel
        title={proj.title}
        img1={proj.img1}
        img2={proj.img2}
        img3={proj.img3}
        >{proj.desc}</ProjectCarousel>
        <br></br>
        <h3>{proj.title}</h3>
        <br></br>
        <p>{proj.desc}</p>
      </div>
      ))
    }
  </div>
}