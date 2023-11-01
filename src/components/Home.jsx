import React from "react";


import myimg1 from "../assests/my img1.png";
import resume from "../assests/certificate.pdf";
import { Link } from "react-router-dom";

function Home() {

  // const resumedown2 = () => {
  //   window.open(
  //     "https://drive.google.com/file/d/1wknVsNofpK-WkVndbvECcUQIFlQczKep/view?usp=sharing",
  //     "_blank"
      
  //   );
  // };
  
  const resumedown = () => {
    window.open(
      "https://drive.google.com/file/d/1wknVsNofpK-WkVndbvECcUQIFlQczKep/view?usp=sharing",
      "_blank"
    )
  };



  return (
    <div id="home">
      {/* <img className="backk" src="https://moneer-portfolio.netlify.app/static/media/fogtree.950d4c4e05476e6c70bb.jpg" alt="" /> */}

  
      <div className="my-info">
        <h2>Hey 👋 there! </h2>
        <h1 id="user-detail-name">I am Hemanth</h1>
        <h2>Full Stack Web Developer.</h2>
       

        <Link 
          className="nav-link resume"
           to="https://drive.google.com/uc?export=download&id=1wknVsNofpK-WkVndbvECcUQIFlQczKep"
        >
          <button
            id="resume-button-2"
           
             onClick={resumedown}
          >
            <i style={{ marginRight: "5px" }} className="far fa-file-alt"></i>
            Resume
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
      <div >
        <img className="home-img" src={myimg1} alt="" />
      </div>

    </div>
  );
}

export default Home;
