import React from "react";


import myimg1 from "../assests/my img1.png";
import myimg2 from "../assests/newProfiePic2.png";
import resume from "../assests/certificate.pdf";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Home() {

  // const resumedown2 = () => {
  //   window.open(
  //     "https://drive.google.com/file/d/1wknVsNofpK-WkVndbvECcUQIFlQczKep/view?usp=sharing",
  //     "_blank"
      
  //   );
  // };
  const theme=useSelector((state)=>{return state.themeReducer.themeDark})
  
  const resumedown = () => {
    window.open(
      "https://drive.google.com/file/d/1wknVsNofpK-WkVndbvECcUQIFlQczKep/view?usp=sharing",
      "_blank"
    )
  };



  return (
    <DIV theme={theme} id="home">
      {/* <img className="backk" src="https://moneer-portfolio.netlify.app/static/media/fogtree.950d4c4e05476e6c70bb.jpg" alt="" /> */}

  
      <div className="my-inf">
        <h3>Hey 👋! </h3>
        <h3 id="user-detail-name">I'm<span> Hemanth</span></h3>
        <h3>Full Stack Web Developer.</h3>
       

        <Link 
          className="nav-link resume"
           to="https://drive.google.com/uc?export=download&id=1wknVsNofpK-WkVndbvECcUQIFlQczKep"
        >
          <button
            id="resume-button-2"
          
             onClick={resumedown}
          >
            {/* <i style={{ marginRight: "5px" }} className="far fa-file-alt"></i> */}
           DOWNLOAD MY CV
          </button>
        </Link>


          {/* <Link
         
          className="nav-link resume"
          to="https://drive.google.com/file/d/1wknVsNofpK-WkVndbvECcUQIFlQczKep/view?usp=sharing"
          target="_blank"
        >
          <button
            id="resume-button-2"
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


      </div>
      <div className="imgDiv">
        <img className="home-im" src={myimg1} alt="" />
      </div>

    </DIV>
  );
}

export default Home;

const DIV=styled.div`
  background-color: ${(props) => (props.theme===true ? "black" : "white")};
color: ${(props) => (props.theme===true ? "white" : "black")};

span{
  color:#691923
}


button{
  background-color: ${(props) => (props.theme===true ? "black" : "white")};
color: ${(props) => (props.theme===true ? "white" : "black")};

border: ${(props) => (props.theme===true ? "1px" : "0px")} solid ${(props) => (props.theme===true ? "white" : "black")};
padding: 8px;
//border: ${(props) => (props.theme===true ? "white" :"none")};
margin-top: 20px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

}

button:hover{
  color:#691923
}

img{
  //filter: grayscale(50%);
  //border-radius: 15px;
  filter: ${(props) => (props.theme===true ? "" : "")};
  background-color: white;
  //box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
 box-shadow:  ${(props) => (props.theme===true ? "10px 10px 0px grey" : " rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset")};
 // box-shadow:  ${(props) => (props.theme===true ? "10px 10px 0px grey" : "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;")};
 
}
.imgDiv{
padding-bottom: 5px;
padding-right: 14px;
/* border-right: 1px solid grey;
border-bottom: 1px solid grey; */
//border-bottom-right-radius: 15px;
}
`

