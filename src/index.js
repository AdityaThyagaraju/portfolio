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
      const horizontalPane = document.querySelectorAll(".Horizontal-scroll");

      function getScrollAmount() {
        let paneWidth = horizontalPane[0].scrollWidth;
        return -(paneWidth - window.innerWidth)
      }

      const tween = gsap.to(horizontalPane[0],{
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

      function getScrollAmount1() {
        let paneWidth = horizontalPane[1].scrollWidth;
        return -(paneWidth - window.innerWidth)
      }

      const tween1 = gsap.to(horizontalPane[1],{
        x:getScrollAmount1,
        duration:3,
        ease:"none"
      });

      ScrollTrigger.create({
        trigger:"#proj-section",
        start:"top -5%",
        end: ()=>`+=${getScrollAmount1()*-1}`,
        pin:true,
        animation:tween1,
        scrub:1,
        invalidateOnRefresh:true
      })
  },3000)
},3000);


