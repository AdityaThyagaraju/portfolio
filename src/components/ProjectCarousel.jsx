import Carousel from "react-material-ui-carousel";
import React from "react";
import { useState } from "react";
import ImgDiv from "./ImgDiv";

function ProjectCarousel({ img1, img2, img3}) {
  let [carouselStyle, setStyle] = useState({
    car: "proj-img",
    btn: "none",
  });
  function mousein() {
    setStyle({ car: "proj-img-hover", btn: "" });
  }
  function mouseleave() {
    setStyle({ car: "", btn: "none" });
  }

  return (
      <>
        <div onMouseOver={mousein} onMouseOut={mouseleave} className={carouselStyle.car}>
          <Carousel sx={{ height: "300px", width: "500px" }}>
            <ImgDiv img={img1} />
            <ImgDiv img={img2} />
            <ImgDiv img={img3} />
          </Carousel>
        </div>
        <a className="visit-btn" style={{ display: carouselStyle.btn,zIndex:"1" }} href="#">
          Visit
        </a>
      </>
  );
}

export default ProjectCarousel;
