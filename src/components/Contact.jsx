import React from "react";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
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
        <p ><IoCall id="contact-phone"/>:+91 9989537586</p>
        <p ><BiLogoGmail id="contact-email"/> hemanthcr217@gmail.com</p>

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
  #contact-github,#contact-linkedin,#contact-email,#contact-phone{
    //color:#691923 ;
    color:#d63447;
  }

  #contact-email,#contact-phone{
   align-items: center;
  }


  
  h2{
  display: inline;
  justify-content: center;
   text-align: center;  
   /* color : white; */
  // border-bottom: 3px solid #691923;
  border-bottom: 3px solid #d63447;
}
a{
  text-align: center;
  width: 45px;
  background-color: ${(props) => (props.theme===true ? "" : "white")};;
 // border: 1px solid ${(props) => (props.theme===true ? "grey":"rgba(76, 72, 72, 0.4)")};
  //box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
box-shadow: ${(props) => (props.theme===true ? "1px 1px 0px grey" : "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset")};;
}

.aboutDiv{
  text-align: center; 
  padding: 10px;
  margin-bottom: 15px;
}
`