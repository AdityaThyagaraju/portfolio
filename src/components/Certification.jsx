import codeVid from "../videos/ocean-63559.mp4";
import HorizontalScroll from "./HorizontalScroll";
import img1 from "../images/mern-udemy.png"
import img2 from "../images/acd-intern.png"
import img3 from "../images/acd-coursecompl.png"
import img4 from "../images/acd-performa.png"
import img5 from "../images/codeclause-intern.png"
import img6 from "../images/cc-lor.png"

const cerificates = [
    {
        img:img1,
        link:"https://drive.google.com/uc?id=1IXWjtAWIekxqHxdgyTmZF8Jm6IAUH4lE",
        title:"UDEMY COURSE COMPLETION"
    },
    {
        img:img2,
        link:"https://drive.google.com/uc?id=1rhE0tMZ1Y3zTI9R6UNHXK-lpGqNGl6D1",
        title:"INTERNSHIP (ACADEMOR)"
    },
    {
        img:img3,
        link:"https://drive.google.com/uc?id=1SOZW_Vt78bUX6iUAntBSpI3ZfjgHBcnZ",
        title:"ACADEMOR COURSE COMPLETION"
    },
    {
        img:img4,
        link:"https://drive.google.com/uc?id=1wOeh_yn83aCaTbT0hNole_ZUilWIlVzG",
        title:"CERIFICATE OF OUTSTANDING PERFORMANCE"
    },
    {
        img:img5,
        link:"https://drive.google.com/uc?id=1Lq0nZ9HmBwVQWhHXcaKb3x8d_2tNIvP2",
        title:"INTERNSHIP (CODECLAUSE)"
    },
    {
        img:img6,
        link:"https://drive.google.com/uc?id=13XYw3izsgI5O5ivYZMHwfwpeQodblwIB",
        title:"LETTER OF RECOMMENDATION"
    },
]

function Certification() {
  return (
    <div
      className="section width-big d-flex justify-content-center align-items-center"
      id="proj-section"
    >
      <video src={codeVid} autoPlay id="codeVid" loop muted></video>
      <div className="proj-carousels">
        <HorizontalScroll cardInfo={cerificates} carousel={false} />
      </div>
    </div>
  );
}
export default Certification;