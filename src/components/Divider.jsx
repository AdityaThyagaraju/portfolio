import React from "react";
import divider from "../images/benner_3.jpg";


function Divider({heading}){
    return <div>
        <img className="divider" src={divider}></img>
        <h3 className="section-headings">{heading}</h3>
    </div>
}

export default Divider;