import React from "react";
import SkillWidget from "./SkillWidget";
import JavascriptIcon from '@mui/icons-material/Javascript';
import jsbg from "../images/javascriptBg.jpg"
import reactbg from "../images/wp4923979-react-js-wallpapers.png"
import nodebg from "../images/wp6606913-nodejs-wallpapers.png"
import tsbg from "../images/7990027.png"
import nextbg from "../images/wp11846969-nextjs-wallpapers.jpg"
import pythonbg from "../images/wp3105542-python-wallpapers.jpg"
import htmlbg from "../images/html-5-html-5-logo-wallpaper-preview.jpg"
import cssbg from "../images/pexels-alex-andrews-3805983.jpg"
import javabg from "../images/wallpaperflare.com_wallpaper.jpg"
import mongobg from "../images/wp8724894-mongodb-wallpapers.png"
import Icon from "./Icon";


function Skills(){
    return<>
        <div className="skills width-sm section" >
        <SkillWidget bg={javabg} >
                <Icon><i className="cib-java"></i></Icon>
                <h3>Java</h3>
                <p>Have been using this ever since i started learning web development<br></br>
                in front-end as well as back-end, created a RESTFUL API using nodejs
                </p>
            </SkillWidget>
            <SkillWidget bg={pythonbg} >
                <Icon><i className="cib-python"></i></Icon>
                <h3>Python</h3>
                <p>Have been using this ever since i started learning web development<br></br>
                in front-end as well as back-end, created a RESTFUL API using nodejs
                </p>
            </SkillWidget>
        <SkillWidget bg={htmlbg}>
                <Icon><i className="cib-html5"></i></Icon>
                <h3>Html</h3>
                <p>Have been using this ever since i started learning web development<br></br>
                in front-end as well as back-end, created a RESTFUL API using nodejs
                </p>
            </SkillWidget>
            <SkillWidget bg={cssbg}>
                <Icon><i className="cib-css3"></i></Icon>
                <h3>Css</h3>
                <p>Have been using this ever since i started learning web development<br></br>
                in front-end as well as back-end, created a RESTFUL API using nodejs
                </p>
            </SkillWidget>
            <SkillWidget bg={jsbg}>
                <Icon><i className="cib-javascript"></i></Icon>
                <h3>Javascript</h3>
                <p>Have been using this ever since i started learning web development<br></br>
                in front-end as well as back-end, created a RESTFUL API using nodejs
                </p>
            </SkillWidget>
            <SkillWidget bg={tsbg}>
                <Icon><i className="cib-typescript"></i></Icon>
                <h3>TypeScript</h3>
                <p>Have been using this ever since i started learning web development<br></br>
                in front-end as well as back-end, created a RESTFUL API using nodejs
                </p>
            </SkillWidget>
        <SkillWidget bg={nodebg}>
                <Icon><i className="fa-brands fa-node"></i></Icon>
                <h3>NodeJs</h3>
                <p>Have been using this ever since i started learning web development<br></br>
                in front-end as well as back-end, created a RESTFUL API using nodejs
                </p>
            </SkillWidget>
            <SkillWidget bg={reactbg}>
                <Icon><i className="fa-brands fa-react"></i></Icon>
                <h3>ReactJs</h3>
                <p>Have been using this ever since i started learning web development<br></br>
                in front-end as well as back-end, created a RESTFUL API using nodejs
                </p>
            </SkillWidget>
            <SkillWidget bg={nextbg}>
                <Icon><i className="cib-next-js"></i></Icon>
                <h3>NextJs</h3>
                <p>Have been using this ever since i started learning web development<br></br>
                in front-end as well as back-end, created a RESTFUL API using nodejs
                </p>
            </SkillWidget>
            <SkillWidget bg={mongobg} >
                <Icon><i className="cib-mongodb"></i></Icon>
                <h3>MongoDB</h3>
                <p>Have been using this ever since i started learning web development<br></br>
                in front-end as well as back-end, created a RESTFUL API using nodejs
                </p>
            </SkillWidget>
        </div>
    </>
}
export default Skills;