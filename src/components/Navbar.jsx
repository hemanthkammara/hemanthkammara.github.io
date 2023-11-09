import React, { useState } from "react";
import AllRoutes from "./AllRoutes";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import resume from "../assests/certificate.pdf";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../Redux/action";
import styled from "styled-components";

function Navbar() {
  const[title,setTitle]=useState("<Hemanth/>")
  const [show, setshow] = useState(true);
  const [display, sedisplay] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  const theme=useSelector((state)=>{return state.themeReducer.themeDark})

  const toggle = () => {
    setshow(!show);
    sedisplay(!display);
  };

  const goTo = (activeurl) => {
    if (activeurl) {
      setCurrentPath(activeurl);
    }
    setshow(true);
    sedisplay(true);
  };
  const dispatch=useDispatch()
  console.log(theme,"hemanth check theme")

  const handleTheme=()=>{
      dispatch(changeTheme(!theme))
  }

  const resumedown = () => {
    window.open(
      "https://drive.google.com/file/d/1LEavLeWVKUxh7xzOQUcBGw7SJhje8zxv/view?usp=sharing",
      "_blank"
    )
  };

  return (
    <DIV theme={theme} className="navbar" id="nav-menu">
      <div>
        <h3>{title}</h3>
      </div>
      <button className="menu-btn" onClick={toggle}>
        {show ? <MdMenu /> : <FaXmark />}
      </button>

      <div className="links" id={display ? "close" : "open"}>
        <a
          onClick={() => goTo("#home")}
          className={`nav-link home ${
            currentPath == "#home" ? "link-active" : ""
          }`}
          href="#home"
        >
          Home
        </a>
        <a
          onClick={() => goTo("#about")}
          className={`nav-link about ${
            currentPath == "#about" ? "link-active" : ""
          }`}
          href="#about"
        >
          About
        </a>
        <a
          onClick={() => goTo("#skills")}
          className={`nav-link skills ${
            currentPath == "#skills" ? "link-active" : ""
          }`}
          href="#skills"
        >
          Skills
        </a>
        <a
          onClick={() => goTo("#projects")}
          className={`nav-link projects ${
            currentPath == "#projects" ? "link-active" : ""
          }`}
          href="#projects"
        >
          Projects
        </a>
        <a
          onClick={() => goTo("#contact")}
          className={`nav-link contact ${
            currentPath == "#contact" ? "link-active" : ""
          }`}
          href="#contact"
        >
          Contact
        </a>
        {/* <a  className='nav-link resume' id='resume-button-1' href="#resume">Resume</a> */}
        {/* <Link onClick={()=>goTo(false)} 
          className="nav-link resume"
           to="https://drive.google.com/uc?export=download&id=1wknVsNofpK-WkVndbvECcUQIFlQczKep"
        >
          <button
            id="resume-button-1"
             onClick={resumedown}
          >
            <i style={{ marginRight: "5px" }} className="far fa-file-alt"></i>
            Resume
          </button>
        </Link> */}


          <button
            id="resume-button-1"
         
             onClick={resumedown}
          >
            <Link onClick={()=>goTo(false)} 
            id="resume-link-1"
          className="nav-link resume"
           to="https://drive.google.com/uc?export=download&id=1LEavLeWVKUxh7xzOQUcBGw7SJhje8zxv"
        >Resume</Link>
         
          </button>
       

        {/* <Link
          onClick={() => goTo(false)}
          className="nav-link resume"
          to="https://drive.google.com/file/d/1wknVsNofpK-WkVndbvECcUQIFlQczKep/view?usp=sharing"
          target="_blank"
        >
          <button
            id="resume-button-1"
            onClick={() => {
              const link = document.createElement("a");
              link.href = resume;
              link.setAttribute("download", "Hemanth-Kumar-Resume.pdf");
              link.click();
            }}
          >
            <i style={{ marginRight: "5px" }} className="far fa-file-alt"></i>
            Resume
          </button>
        </Link> */}

        {/* <a id="resume-button-1" className="nav-link resume"
         href="https://drive.google.com/file/d/1wknVsNofpK-WkVndbvECcUQIFlQczKep/view?usp=sharing"

         

          target="_blank"
          onClick={() => {
            const link = document.createElement("a");
            link.href = resume;
            link.setAttribute("download", "hemanth_kumar_resume.pdf");
            link.click();
          }}
          >
         Resume
          </a> */}
          <button className="themeButton" onClick={handleTheme}>{theme===true?"Light":"Dark"}</button>


          
      </div>
    </DIV>
  );
}

export default Navbar;



const DIV=styled.div`
  background-color: ${(props) => (props.theme===true ? "black" : "white")};
color: ${(props) => (props.theme===true ? "white" : "black")};

.links{
  background-color: ${(props) => (props.theme===true ? "black" : "white")};
color: ${(props) => (props.theme===true ? "white" : "black")};
}
.menu-btn {
  color: ${(props) => (props.theme===true ? "white" : "black")};
}

#menu-btn{
   background-color: ${(props) => (props.theme===true ? "black" : "white")};
color: ${(props) => (props.theme===true ? "white" : "black")};
}

a{
 //border: 1px solid black;
 position: relative;
  color: ${(props) => (props.theme===true ? "white" : "black")};
}
a::after{
content: "";
position: absolute;
left: 0;
bottom: 0;
height: 2px;
width: 0%;
background-color: ${(props) => (props.theme===true ? "white" : "black")};
transition: all ease 1s;
}

a:hover::after{
  width: 100%;
}



.themeButton{
  font-weight: 600;
  width: 45px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
h3{
  margin-left: 35px;
}

@media only screen and (min-width: 771px) and (max-width: 900px) {
.navbar{
  width: 100%;
}
.navbar a {
  color: rgb(24, 23, 23);
  font-weight: 600;
  padding: 14px 30px;
  min-width: 50px;
  text-align: center;
}
}

`
