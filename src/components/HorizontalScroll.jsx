import ProjectCarousel from "./ProjectCarousel";

export default function HorizontalScroll({cardInfo,carousel}){
    return <div className="Horizontal-scroll">
    {
      cardInfo.map((proj,index)=>carousel?(
        <div className=" carousel-div d-flex justify-content-center align-items-center flex-column">
        <ProjectCarousel
        title={proj.title}
        img1={proj.img1}
        img2={proj.img2}
        img3={proj.img3}
        link={proj.link}
        carousel={true}
        />
        <br></br>
        <h3>{proj.title}</h3>
        <br></br>
        <p>{proj.desc}</p>
      </div>
      ):(
        <div className=" carousel-div d-flex justify-content-center align-items-center flex-column">
        <ProjectCarousel
        img1={proj.img}
        link={proj.link}
        carousel={false}
        />
        <br></br>
        <h3>{proj.title}</h3>
      </div>
      )
      )
    }
  </div>
}