import React from "react";
import styled from 'styled-components'
import { FaCss3Alt, FaJsSquare, FaHtml5 } from "react-icons/fa";
{/* <FaHtml5 style={{ fontSize: "100px" }} />
<FaJsSquare style={{ fontSize: "100px" }} />
<FaCss3Alt style={{ fontSize: "100px" }} /> */}
const skills = [
  {
    name: "HTML",
    icon : <FaHtml5 />
  },
  {
    name: "CSS",
    icon : <FaCss3Alt />
  },
  {
    name: "JS",
    icon : <FaJsSquare />
  },
  {
    name: "REACT",
    icon : <FaHtml5 />
  },
  {
    name: "REDUX",
    icon : <FaHtml5 />
  },
  {
    name: "CHAKRA UI",
    icon : <FaHtml5 />
  },
];


function Skills() {
  return (
    // <div id="skills">
    //   <h1>Skills and Tools</h1>
    //   <div className="skills_deta">

   
    //   {skills.map((item) => (
    //     <div className="skills-card">
    //       {/* className="skills-card-img" */}
    //       <div className="skills-card-img">{item.icon}</div>
    //       <p className="skills-card-name">{item.name}</p>
    //     </div>
    //   ))}
    // </div>
    // </div>
    <DIV id="skills">
    <h1 style={{marginTop:"40px",marginBottom:"35px"}}>Skills</h1>
<div className='outerDiv'>

    <div className='gridDiv'>

            <div className="singleDiv skills-card">
                <img className="skills-card-img" src="https://img.icons8.com/officel/160/react.png" alt="react"/>
                <p className='teckName skills-card-name'>react</p>
            </div>
            <div className="singleDiv skills-card">
            <img className="skills-card-img" width="160" height="160" src="https://img.icons8.com/office/160/express-js.png" alt="express-js"/>
                <p className='teckName skills-card-name'>express js</p>
            </div>

            <div className="singleDiv skills-card">
            <img className="skills-card-img" width="240" height="240" src="https://img.icons8.com/fluency/240/node-js.png" alt="node-js"/>
                <p className='teckName skills-card-name'>node js</p>
            </div>

            <div className="singleDiv skills-card">
            <img className="skills-card-img" width="96" height="96" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo"/>
                <p className='skills-card-name'>mongo db</p>
            </div>

            
            <div className="singleDiv skills-card">
            <img className="skills-card-img" width="240" height="240" src="https://img.icons8.com/color/240/typescript.png" alt="typescript"/>
                <p className='skills-card-name'>type script</p>
            </div>

            <div className="singleDiv skills-card">
            <img className="skills-card-img" width="240" height="240" src="https://img.icons8.com/color/240/html-5--v1.png" alt="html-5--v1"/>
                <p className='skills-card-name'>HTML</p>
            </div>
            <div className="singleDiv skills-card">
            <img className="skills-card-img" width="240" height="240" src="https://img.icons8.com/color/240/css3.png" alt="css3"/>
                <p className='skills-card-name'>css</p>
            </div>
            

            <div className="singleDiv skills-card">
            <img className="skills-card-img" width="240" height="240" src="https://img.icons8.com/color/240/javascript.png" alt="javascript"/>
                <p className='skills-card-name'>java script</p>
            </div>


    </div>
</div>
    


</DIV>
  )
}
const DIV=styled.div`
margin-bottom:50px;
.outerDiv{

    width: 70%;
    border:1px solid black;
    /* border:1px solid white; */
    border-radius: 25px;
    display: flex;
   justify-content: center; /* Center horizontally */
   align-items: center;
   margin: auto;
   padding: 30px;
}

h1{
   text-align: center;  
   /* color : white; */
}
p{
    /* color: white; */
}

.gridDiv{

    width: 70%;
    margin: auto;
    /* border: 1px solid black; */
    display: grid;
    grid-template-columns: repeat(4,1fr);
    row-gap: 10px;
}

    .singleDiv{
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 100px;
        height: 100px;
      
    }
    p{
        text-align:center;
        font-size: 25px;
        padding: 0;
        margin: 0;
    }
`

export default Skills;

// Each skills card in the Skills section should have class="skills-card" and the following:
// Image : class="skills-card-img"
// Name : class="skills-card-name"
