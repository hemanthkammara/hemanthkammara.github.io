import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";



function About() {
  const theme=useSelector((state)=>{return state.themeReducer.themeDark})


  return (
    <DIV theme={theme} id="about" className="about section">

          <div className="aboutDiv">

              <h1>About Me</h1>
          </div>
     <div className="about_car text">
      {/* <img className="about_img" src={img2} alt="" /> */}
      <p id="user-detail-intro" className="my-details">
      "I'm Hemanth Kumar, a dedicated full-stack web developer with a strong focus on building user-centric web applications. I'm passionate about creating robust, modern websites and thrive on problem-solving. My background includes extensive experience in both front-end and back-end development. I'm committed to delivering high-quality, scalable solutions and continuously expanding my skillset. My goal is to drive value for the organizations I work with through innovative web development with skills like CSS,MERN and JAVASCRIPT." 
      </p>
     </div>


    </DIV>
  );
}

export default About;
const DIV=styled.div`

  h1{
  display: inline;
  justify-content: center;
   text-align: center;  
   /* color : white; */
  // border-bottom: 3px solid #691923;
   border-bottom: 3px solid #d63447;
   
}

.aboutDiv{
  text-align: center; 
  padding: 10px;
  margin-bottom: 15px;
}

.text{
  margin: auto;
  width: 80%;
  border: 1px solid ${(props) => (props.theme===true ? "grey":"white")};
 

 box-shadow: ${(props) => (props.theme===true ? "5px 5px 0px grey" : "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px")};
}



@media only screen and (max-width: 650px) {
 
  .text{
  margin: auto;
  width: 80%;
  border: 1px solid ${(props) => (props.theme===true ? "grey":"white")};
 

 box-shadow: ${(props) => (props.theme===true ? "5px 5px 0px grey" : "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px")};
}

p{
  color:black;
  color:${(props) => (props.theme===true ? "white":"black")} 
}
}
`

