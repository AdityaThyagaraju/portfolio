import React from "react";

function Icon({children}){
    return <div className="icon-wrapper">
    <div className="d-flex justify-content-center align-items-center w-100 h-100">
        {children}
        </div>
    </div>
}

export default Icon;