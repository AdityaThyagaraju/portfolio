import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./Nav";
import ScrollPane from "./ScrollPane";
import bodyBg from "../images/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner.jpg"


function Body() {

  return (
    <div id="body"  style={{backgroundImage:`url(${bodyBg})`,backgroundSize:"cover",minHeight:"100vh"}} className="none">
      <Nav />
      <ScrollPane />
    </div>
  );
}

export default Body;
