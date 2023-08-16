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
                <p>Proficient in Java programming, adeptly crafting robust and scalable solutions for diverse software challenges, enhancing portfolio with versatile coding expertise.
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
                <p>Harnessing the power of HTML to create engaging and interactive web experiences, showcasing a skillful blend of structure and design in portfolio projects.
                </p>
            </SkillWidget>
            <SkillWidget bg={cssbg}>
                <Icon><i className="cib-css3"></i></Icon>
                <h3>Css</h3>
                <p>Mastery of CSS demonstrated in portfolio, skillfully transforming concepts into visually captivating and responsive web interfaces that leave a lasting impression.
                </p>
            </SkillWidget>
            <SkillWidget bg={jsbg}>
                <Icon><i className="cib-javascript"></i></Icon>
                <h3>Javascript</h3>
                <p>Elevating portfolio with dynamic and interactive web elements using JavaScript, showcasing the ability to create engaging user experiences and functional enhancements through proficient coding.
                </p>
            </SkillWidget>
            <SkillWidget bg={tsbg}>
                <Icon><i className="cib-typescript"></i></Icon>
                <h3>TypeScript</h3>
                <p>Enhancing portfolio with projects developed in TypeScript, highlighting expertise in building robust and maintainable web applications through statically-typed, modern JavaScript programming.
                </p>
            </SkillWidget>
        <SkillWidget bg={nodebg}>
                <Icon><i className="fa-brands fa-node"></i></Icon>
                <h3>NodeJs</h3>
                <p>Empowering portfolio with Node.js projects, illustrating adeptness in leveraging its asynchronous capabilities to build scalable and high-performance server-side applications for diverse purposes.
                </p>
            </SkillWidget>
            <SkillWidget bg={reactbg}>
                <Icon><i className="fa-brands fa-react"></i></Icon>
                <h3>ReactJs</h3>
                <p>Elevating portfolio with React.js applications that reflect proficiency in crafting dynamic and responsive user interfaces, showcasing the ability to create engaging front-end experiences using component-based architecture.
                </p>
            </SkillWidget>
            <SkillWidget bg={nextbg}>
                <Icon><i className="cib-next-js"></i></Icon>
                <h3>NextJs</h3>
                <p>Enriching portfolio with Next.js projects that demonstrate expertise in building server-rendered React applications, combining seamless navigation and enhanced performance for modern web experiences.
                </p>
            </SkillWidget>
            <SkillWidget bg={mongobg} >
                <Icon><i className="cib-mongodb"></i></Icon>
                <h3>MongoDB</h3>
                <p>Enhancing portfolio with MongoDB integration, exemplifying adeptness in designing flexible and high-performance database solutions for a range of dynamic applications.
                </p>
            </SkillWidget>
        </div>
    </>
}
export default Skills;