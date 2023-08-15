import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App"
import $ from "jquery"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
let root = createRoot(document.getElementById("root"));

root.render(<App />);

setTimeout(function(){
  $("#load").fadeOut(3000);
  setTimeout(function(){
      $("#body").removeClass("none");
      const horizontalPane = document.querySelector(".Horizontal-scroll");
      console.log(horizontalPane.offsetWidth)

      function getScrollAmount() {
        let paneWidth = horizontalPane.scrollWidth;
        return -(paneWidth - window.innerWidth)
      }

      const tween = gsap.to(horizontalPane,{
        x:getScrollAmount,
        duration:3,
        ease:"none"
      });

      ScrollTrigger.create({
        trigger:"#vid-section",
        start:"top -5%",
        end: ()=>`+=${getScrollAmount()*-1}`,
        pin:true,
        animation:tween,
        scrub:1,
        invalidateOnRefresh:true
      })
  },3000)
},5000);


