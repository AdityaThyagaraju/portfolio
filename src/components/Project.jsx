import codeVid from "../videos/ocean-63559.mp4";
import HorizontalScroll from "./HorizontalScroll";
import proj1img from "../images/proj1.jpg";
import proj1img2 from "../images/proj12.jpg";
import proj1img3 from "../images/proj13.jpg";

import proj2img from "../images/proj2img1.png";
import proj2img2 from "../images/proj2img2.png";
import proj2img3 from "../images/proj2img3.png";

import proj3img from "../images/proj3img1.png";
import proj3img2 from "../images/proj3img2.png";
import proj3img3 from "../images/proj3img3.png";

import proj4img from "../images/proj4img1.png";
import proj4img2 from "../images/proj4img2.png";
import proj4img3 from "../images/proj4img3.png";

import proj5img from "../images/proj5img1.png";
import proj5img2 from "../images/proj5img2.png";
import proj5img3 from "../images/proj5img3.png";

var projCardInfo = [
  {
    title:'Automobile servicing web application',
    img1:proj1img,
    img2:proj1img2,
    img3:proj1img3,
    link:'http://adityauday2002.pythonanywhere.com/',
    desc:'An automobile servicing web application is a tool that allows users to schedule and manage their vehicle maintenance and repairs online.'
  },
  {
    title:'Sociomedia',
    img1:proj2img,
    img2:proj2img2,
    img3:proj2img3,
    link:'https://sociomedia-aditya-thyagaraju.netlify.app/',
    desc:'A complete MERN application developed to implement a social media platform, it uses react framework to develope frontend, the site is supported by proprietary server developed using node.js'
  },
  {
    title:'AGROW',
    img1:proj3img,
    img2:proj3img2,
    img3:proj3img3,
    link:'https://agriculture-auctions-and-sales.onrender.com/',
    desc:'A web application to host agriculture auctions and sales, developed using nodejs, supported with payment gateway integration, dynamically updated timers from backend using socket io'
  },
  {
    title:'SIMILARITY API',
    img1:proj4img,
    img2:proj4img2,
    img3:proj4img3,
    link:'https://vercel.com/adityathyagaraju/api-server-h3ag/fMQHVf3q5ACQRxD7YWqJrkhfwAC3',
    desc:'A NEXT JS application, developed to render a web service to check the similarity between two texts using openai, it provides developers a service accessible using API KEYS, uses planet scale database'
  },
  {
    title:'BANKING SYSTEM',
    img1:proj5img,
    img2:proj5img2,
    img3:proj5img3,
    link:'https://online-banking-system-3xr2.onrender.com/',
    desc:'A web application to implement banking system online, it uses additional transaction password to perform basic fund transfers, it also provides admin account to control user accounts'
  }
]


function Project() {
  return (
    <div
      className="section width-big d-flex justify-content-center align-items-center"
      id="vid-section"
    >
      <video src={codeVid} autoPlay id="codeVid" loop muted></video>
      <div className="proj-carousels">
        <HorizontalScroll cardInfo={projCardInfo} carousel={true}/>
      </div>
    </div>
  );
}
export default Project;
