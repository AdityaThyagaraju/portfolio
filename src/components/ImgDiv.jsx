import React from "react";

function ImgDiv({img}){
    return <div className="carousel-item active">
    <img src={img} className="proj-img" alt="Wild Landscape"></img>
  </div>
}

export default ImgDiv