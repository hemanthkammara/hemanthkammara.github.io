import React from "react";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa6";
import { useSelector } from "react-redux";
import styled from "styled-components";
function Contact() {
  const theme=useSelector((state)=>{return state.themeReducer.themeDark})
  return (
    <DIV theme={theme} id="contact">
      <div className="contact_details">
        <div className="aboutDiv">

        <h2>Contact-Me</h2>
        </div>
        <p id="contact-phone">+91 9989537586</p>
        <p id="contact-email">hemanthcr217@gmail.com</p>

        <div className="my_icon">
          <a id="contact-github" href="https://github.com/hemanthkammara">
            <FaGithub/>
          </a>
          <br />
          <a
            id="contact-linkedin"
            href="https://www.linkedin.com/in/hemanth-kumar-kammara/"
          >
           <FaLinkedin/>
          </a>
        </div>
      </div>
    </DIV>
  );
}

export default Contact;
const DIV=styled.div`
  #contact-github,#contact-linkedin{
    color:#691923 ;
  }




  
  h2{
  display: inline;
  justify-content: center;
   text-align: center;  
   /* color : white; */
   border-bottom: 3px solid #691923;
  
}

.aboutDiv{
  text-align: center; 
  padding: 10px;
  margin-bottom: 15px;
}
`