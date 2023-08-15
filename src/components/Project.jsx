import codeVid from "../videos/ocean-63559.mp4";
import HorizontalScroll from "./HorizontalScroll";


function Project() {
  return (
    <div
      className="section width-big d-flex justify-content-center align-items-center"
      id="vid-section"
    >
      <video src={codeVid} autoPlay id="codeVid" loop muted></video>
      <div className="proj-carousels">
        <HorizontalScroll />
      </div>
    </div>
  );
}
export default Project;
