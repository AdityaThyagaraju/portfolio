import React from "react";
import Greet from "./Greet";
import Body from "./Body"


function App(){
    return <div style={{background:"linear-gradient(138deg, rgba(0,11,27,1) 41%, rgba(1,22,46,1) 73%, rgba(0,45,96,1) 97%)",minHeight:"100vh"}} >
        <Greet />
        <Body />
    </div>
}

export default App;