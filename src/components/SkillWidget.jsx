import React from "react";
import Icon from "./Icon";

function SkillWidget({bg,color="white",children}){
    return <div className="skill-widget">
    <img src={bg}></img>
    <div className="skill-div" style={{color:color}}>
    {children}
    </div>
    </div>
}

export default SkillWidget;