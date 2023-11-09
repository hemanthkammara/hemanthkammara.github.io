import React from "react";
import styled from 'styled-components'
import { FaCss3Alt, FaJsSquare, FaHtml5 } from "react-icons/fa";
import { useSelector } from "react-redux";
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
  const theme=useSelector((state)=>{return state.themeReducer.themeDark})
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
    <DIV theme={theme} id="skills">
      <div className="skillDiv">

    <h1 style={{marginTop:"40px",marginBottom:"35px"}}>Skills</h1>
      </div>
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
   
    //border: 0.2px solid ${(props) => (props.theme===true ? "grey" : "black")};
    /* border:1px solid white; */
    //border-radius: 25px;
    display: flex;
   justify-content: center; /* Center horizontally */
   align-items: center;
   margin: auto;
   padding: 30px;

  // box-shadow: ${(props) => (props.theme===true ? "10px 10px 0px grey" : "")};
   border: 1px solid ${(props) => (props.theme===true ? "grey":"white")};
 

 box-shadow: ${(props) => (props.theme===true ? "10px 10px 0px grey" : "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px")};
}

h1{
  display: inline;
  justify-content: center;
   text-align: center;  
   /* color : white; */
   //border-bottom: 3px solid #691923;
   border-bottom: 3px solid #d63447;
}

.skillDiv{
  text-align: center; 
  padding: 10px;
  margin-bottom: 15px;
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
    column-gap: 10px;
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
       // box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      // border: 1px solid ${(props) => (props.theme===true ? "grey":"white")};
        box-shadow: ${(props) => (props.theme===true ? "2px 2px 0px grey" : "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset")};
   /* border-bottom: 1px solid grey;
   border-right: 1px solid grey; */
      }
    p{
        text-align:center;
        font-size: 25px;
        padding: 0;
        
    }

    @media only screen and (max-width: 770px) {
      .gridDiv{
        width: 100%;
grid-template-columns: repeat(2,1fr);

}

    }
`

export default Skills;

// Each skills card in the Skills section should have class="skills-card" and the following:
// Image : class="skills-card-img"
// Name : class="skills-card-name"
