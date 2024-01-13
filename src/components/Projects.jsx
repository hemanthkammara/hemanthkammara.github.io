import React from "react";
// import sastasafar from "../assests/sastasafar.png";
// import abc from "../assests/abc.png";
// import abc2 from "../assests/abc2.png";
// import oddgrass from "../assests/odd grass.png";
// import dressify from "../assests/dressify.png";
// import oddgras from "../assests/oddgrass-2.png";
import styled from 'styled-components'
import explore from "../assests/explore.png"
import ecofood from "../assests/ecofood.png"
import travelo from "../assests/travelo.png"
import gurukulam from "../assests/gurukulam.png"
import plant from "../assests/plant.png"
// import olx from "../assests/olx-2.png";
// import iph from "../assests/iPhone 13f.png";


import { FaCss3Alt, FaJsSquare, FaHtml5 } from "react-icons/fa";
import { useSelector } from "react-redux";
// https://react-icons.github.io/react-icons/icons?name=fa

// let projects = [

//   {
//     title: "Sasta safar",
//     img1: abc,
//     img2: iph,
//     description: "Sasta Safar is an ecotourism website that empowers users to select their desired travel destinations and book their tickets. Whether users are planning a nature retreat or an adventurous expedition, Sasta Safar offers a user-friendly platform to explore various destinations and secure their travel tickets with ease",
//     skills: [
//       {
//         name: "HTML",
//         icon: <FaHtml5 />,
//       },
//       {
//         name: "CSS",
//         icon: <FaCss3Alt />,
//       },
//       {
//         name: "JS",
//         icon: <FaJsSquare />,
//       },
//     ],
//     git: "https://github.com/mymsa123/quixotic-snail-9802",
//     preview: "https://glittery-elf-a56a10.netlify.app/",
//   },
//   {
//     title: "Dressify",
//     img1: dressify,
//     img2: abc2,
//     description: "Dressify is one-stop destination for fashionable clothing  for men, women and children. Anyone can go through the wide range of products that are available on our website and order the desired one",
//     skills: [
//       {
//         name: "HTML",
//         icon: <FaHtml5 />,
//       },
//       {
//         name: "CSS",
//         icon: <FaCss3Alt />,
//       },
//       {
//         name: "JS",
//         icon: <FaJsSquare />,
//       },
//     ],
//     git: "https://github.com/astik0398/ambiguous-oven-8467",
//     preview: "https://dressify-shopping.netlify.app/",
//   },
//   {
//     title: "Odd Grass",
//     img1: oddgrass,
//     img2: oddgras,
//     description: "Gamy Part is a website designed to help users explore the world . It offers convenient features that allow users to book destinations, hotels, and activities with just a tap. The platform boasts a simple and user-friendly UI/UX, ensuring a seamless experience for travelers looking to plan their journeys.",  
    
//     skills: [
//       {
//         name: "HTML",
//         icon: <FaHtml5 />,
//       },
//       {
//         name: "CSS",
//         icon: <FaCss3Alt />,
//       },
//       {
//         name: "JS",
//         icon: <FaJsSquare />,
//       },
//     ],
//     git: "https://github.com/harsh7739/odd-grass-4307",
//     preview: "https://resonant-meringue-f6cdea.netlify.app/index.html",
//   },
//   {
//     title: "Gamy-Part",
//     img1: abc,
//     img2: olx,
//     description: "Gamy Part is a website clone of OLX, where users can browse and select products they want to buy. Similar to OLX, Gamy Part allows users to choose from a variety of products available on the platform.",

//     skills: [
//       {
//         name: "HTML",
//         icon: <FaHtml5 />,
//       },
//       {
//         name: "CSS",
//         icon: <FaCss3Alt />,
//       },
//       {
//         name: "JS",
//         icon: <FaJsSquare />,
//       },
//     ],
//     git: "https://github.com/mohdadil12345/gamy-part-5391",
//     preview: "https://splendorous-arithmetic-9d81d2.netlify.app/",
//   },
  // {
  //   title: "project-1",
  //   img1: abc,
  //   img2: abc2,
  //   description: "Dressify is one-stop destination for fashionable clothing and accessories for men, women and children. Anyone can go through the wide range of products that are available on our website and order the desired one",

  //   skills: [
  //     {
  //       name: "HTML",
  //       icon: <FaHtml5 />,
  //     },
  //     {
  //       name: "CSS",
  //       icon: <FaCss3Alt />,
  //     },
  //     {
  //       name: "JS",
  //       icon: <FaJsSquare />,
  //     },
  //   ],
  //   git: "https://github.com/astik0398/ambiguous-oven-8467",
  //   preview: "https://dressify-shopping.netlify.app/",
  // },
  // {
  //   title: "project-2",
  //   img1: abc,
  //   img2: abc2,
  //   description: "Dressify is one-stop destination for fashionable clothing and accessories for men, women and children. Anyone can go through the wide range of products that are available on our website and order the desired one",

  //   skills: [
  //     {
  //       name: "HTML",
  //       icon: <FaHtml5 />,
  //     },
  //     {
  //       name: "CSS",
  //       icon: <FaCss3Alt />,
  //     },
  //     {
  //       name: "JS",
  //       icon: <FaJsSquare />,
  //     },
  //   ],
  //   git: "https://github.com/astik0398/ambiguous-oven-8467",
  //   preview: "https://dressify-shopping.netlify.app/",
  // },
// ];

function Projects() {
    const theme=useSelector((state)=>{return state.themeReducer.themeDark})
  return (
    // <div id="projects">
    //   <h1>Projects </h1>
    //   <div className="all_projects">
    //     {projects.map((el) => (
    //       <div className="project-card">
    //         <div className="pro-img">
    //           <img src={el.img1} alt="" />
    //         </div>
    //         <div className="pro-img1">
    //           <img src={el.img2} alt="" />
    //         </div>

    //         <div className="pro-Info">
    //           <h2 className="project-title">{el.title}</h2>
    //           <p className="project-description">{el.description}</p>
    //           <h2>Tech Stack</h2>
    //           <div className="project-tech-stack">
    //             {el.skills.map((skill) => (
    //               <div className="skills-card">
    //                 {skill.icon}
    //                 <p style={{ fontSize: "20px" }}>{skill.name}</p>
    //               </div>
    //             ))}
    //           </div>
    //           <div className="pro-anchortag">
    //             <a
    //               className="project-github-link"
    //               href={el.git}
    //               target="_blank"
    //             >
    //               <button>Github Code</button>
    //             </a>
    //             <a
    //               className="project-deployed-link"
    //               target="_blank"
    //               href={el.preview}
    //             >
    //               <button>Preview</button>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <DIV theme={theme} id="projects">
        <div className="projectDiv">

    <h1>Projects</h1>
        </div>

    <div className="outerDiv project-card">
        <div className="indiP">

            <img className="projectPic" src={explore} alt="" />
            </div>
            <div className="sideData">
                <h3 className="project-title">Explore</h3>

                <p className="project-description"> a travel website that combines stunning destination showcases with a seamless flight booking experience. This website is not just a beautiful visual journey through the world's most incredible places but also a practical tool for travelers to easily book their flights. </p>

                {/* <div className="techStacks project-tech-stack"> */}
                <div className="techStacks ">
                        <div className="singleDiv">
                        <img width="240" height="240" src="https://img.icons8.com/color/240/html-5--v1.png" alt="html-5--v1"/>
                            <p className='teckName'>HTML</p>
                        </div>
                        <div className="singleDiv">
                        <img width="240" height="240" src="https://img.icons8.com/color/240/css3.png" alt="css3"/>
                            <p className='teckName'>css</p>
                        </div>
                        

                        <div className="singleDiv">
                        <img width="240" height="240" src="https://img.icons8.com/color/240/javascript.png" alt="javascript"/>
                            <p className='teckName'>java script</p>
                        </div>
               
                </div>

                <div className="gitLive">
                    <a className="project-github-link" href="https://github.com/hemanthkammara/skillful-dog-1445"><button>Git hub</button></a>
                    <a className="project-deployed-link" href="https://adorable-gaufre-5079aa.netlify.app/ "><button>Go Live</button></a>
                </div>

            </div>
        
    </div>



    <div className="outerDiv project-card">
        <div className="indiP">

            <img className="projectPic" src={travelo} alt="" />
            </div>
            <div className="sideData">
                <h3 className="project-title">Travelo</h3>

                <p className="project-description">Introducing my travel website, where booking multiple destinations in one journey is made simple. . With a user-friendly interface and robust booking features, this site redefines the way you explore the world </p>

                <div className="techStacksTravelo project-tech-stac">
                        <div className="singleDiv">
                        <img width="240" height="240" src="https://img.icons8.com/color/240/html-5--v1.png" alt="html-5--v1"/>
                            <p className='teckName'>HTML</p>
                        </div>
                        <div className="singleDiv">
                        <img width="240" height="240" src="https://img.icons8.com/color/240/css3.png" alt="css3"/>
                            <p className='teckName'>css</p>
                        </div>
                        
                        <div className="singleDiv">
                        <img width="240" height="240" src="https://img.icons8.com/color/240/javascript.png" alt="javascript"/>
                            <p className='teckName'>java script</p>
                        </div>

                        <div className="singleDiv">
                        <img width="100" height="100" src="https://img.icons8.com/ios/100/api-settings.png" alt="api-settings"/>
                            <p className='teckName'>Rest Api</p>
                        </div>



                </div>

                <div className="gitLive">
                    <a className="project-github-link" href="https://github.com/audacity07/travello"><button>Git hub</button></a>
                    <a className="project-deployed-link" href="https://sensational-starship-6bc092.netlify.app/"><button>Go Live</button></a>
                </div>

            </div>
        
    </div>

    <div className="outerDiv project-card">
        <div className="indiP">

            <img className="projectPic" src={plant} alt="" />
            </div>
            <div className="sideData">
                <h3 className="project-title">Gardenium</h3>

               
                <p className="project-description">a online plateform for shopping plants offering seamless user experiences from secure login and captivating product pages and  sorting, filtering, and an empowered admin panel for efficient CRUD operations and insightful charts integration </p>

                <div className="techStacksTravelo project-tech-stac">
                        


                        <div className="singleDiv">
                        <img src="https://img.icons8.com/officel/160/react.png" alt="react"/>
                            <p className='teckName'>react</p>
                        </div>


                        <div className="singleDiv">
                        <img width="240" height="240" src="https://img.icons8.com/color/240/chakra-ui.png" alt="chakra-ui"/>
                            <p className='teckName'>chakra-ui</p>
                        </div>

                        <div className="singleDiv">
                        <img width="240" height="240" src="https://img.icons8.com/color/240/css3.png" alt="css3"/>
                            <p className='teckName'>css</p>
                        </div>
                        

                        <div className="singleDiv">
                        <img width="100" height="100" src="https://img.icons8.com/ios/100/api-settings.png" alt="api-settings"/>
                            <p className='teckName'>Rest Api</p>
                        </div>

                </div>

                <div className="gitLive">
                    <a className="project-github-link" href="https://github.com/ankitsimari/Gardenium"><button>Git hub</button></a>
                    <a className="project-deployed-link" href="https://plant-website-y4qr.vercel.app/"><button>Go Live</button></a>
                </div>
                {/* <div className="gitLive">
                    <a className="project-github-link" href="https://github.com/ankitsimari/Gardenium"><button>Git hub</button></a>
                    <a className="project-deployed-link" href="https://plant-website-y4qr.vercel.app/"><button>Go Live</button></a>
                </div> */}

            </div>
        
    </div>

    <div className="outerDiv project-card">
        <div className="indiP">

            <img className="projectPic" src={ecofood} alt="" />
            </div>
            <div className="sideData">
                <h3 className="project-title">Eco Food</h3>

                <p className="project-description">a dynamic online platform for fresh and delectable farm-fresh vegetables, fruits, and a selection of premium meats, including chicken, mutton, and seafood, delivered to your doorstep. </p>

                <div className="techStacksTravelo project-tech-stac">
                        


                        <div className="singleDiv">
                        <img src="https://img.icons8.com/officel/160/react.png" alt="react"/>
                            <p className='teckName'>react</p>
                        </div>


                        <div className="singleDiv">
                        <img width="240" height="240" src="https://img.icons8.com/color/240/chakra-ui.png" alt="chakra-ui"/>
                            <p className='teckName'>chakra-ui</p>
                        </div>

                        <div className="singleDiv">
                        <img width="240" height="240" src="https://img.icons8.com/color/240/css3.png" alt="css3"/>
                            <p className='teckName'>css</p>
                        </div>
                        

                        <div className="singleDiv">
                        <img width="100" height="100" src="https://img.icons8.com/ios/100/api-settings.png" alt="api-settings"/>
                            <p className='teckName'>Rest Api</p>
                        </div>

                </div>

                <div className="gitLive">
                    <a className="project-github-link" href="https://github.com/hemanthkammara/sleek-circle-8356"><button>Git hub</button></a>
                    <a className="project-deployed-link" href="https://ecofoodankit.vercel.app/"><button>Go Live</button></a>
                </div>

            </div>
        
    </div>



</DIV>
  )
}
const DIV=styled.div`
margin: auto;
h1{
    text-align: center;
    margin-bottom: 25px;
}

    .outerDiv{
        display: flex;
        width: 70%;
       // border: 1px solid ${(props) => (props.theme===true ? "white" : "black")};
        margin:auto;
        //border-radius:5px;
        margin-bottom:35px;
        border: 1px solid ${(props) => (props.theme===true ? "grey":"white")};
 

 box-shadow: ${(props) => (props.theme===true ? "5px 5px 0px grey" : "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px")};


    }
    .indiP{
        width: 55%;
    }
    .sideData{
        width: 40%;
      padding-left:15px;
      padding-bottom:10px;
    }
    p,h3{
        margin: 0;
        padding: 0;
        margin-bottom:10px;
    }
    h3{
        text-align: center;
        font-size: 35px;
    }

    .projectPic{
        width: 100%;
        height: 100%;
        /* border-top-left-radius:35px;
        border-bottom-left-radius:35px; */
       
    }

    .techStacks{

    width: 70%;
    margin: auto;
    /* border: 1px solid black; */
    // display: grid; 
    display: flex;
    // grid-template-columns: repeat(4,1fr); 
    row-gap: 10px;
    }
    .techStacksTravelo{

    width: 75%;
    margin: auto;
    /* border: 1px solid black; */
    display: grid;
    /* display: flex; */
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
    .singleDiv img{
        width: 70%;
        height: 70%;
       // box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        box-shadow: ${(props) => (props.theme===true ? "2px 2px 0px grey" : "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset")};
    }
    .gitLive{
        width: 70%;
        
        display: flex;
        justify-content:space-evenly;
        margin:auto;
    }

    button{
        /* bg="black" color="white" mt={5} mb={5} width="80%" height="30px" */
        
        /* color:  #691923;
        color: black;
        width: 150%;
        font-size:15px;
        border-radius: 5px;
        border: none; */
        
    }



    button{
            background-color: ${(props) => (props.theme===true ? "black" : "white")};
            color: ${(props) => (props.theme===true ? "white" : "black")};

           // border: 1px solid ${(props) => (props.theme===true ? "white" : "black")};
           border: ${(props) => (props.theme===true ? "1px" : "0px")} solid ${(props) => (props.theme===true ? "white" : "black")};
           box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        
            

}

button:hover{
 // color:#691923;
  color:#d63447;
}
    .gitlogo{
        width: 10%;
    }


.projectDiv{
    text-align: center; 
  padding: 10px;
  margin-bottom: 45px;
}

h1{
  display: inline;
  justify-content: center;
   text-align: center;  
   /* color : white; */
  // border-bottom: 3px solid #691923;
  border-bottom: 3px solid #d63447;

}
@media only screen and (min-width: 651px) and (max-width: 900px) {
    .outerDiv{
        display: flex;
        flex-direction: column;
        width: 95%;
       // border: 1px solid ${(props) => (props.theme===true ? "white" : "black")};
        margin:auto;
        margin-bottom:20px;
        //border-radius:5px;
    }
    .indiP{
        width: 100%;
    }
    .indiP img{
width: 100%;
    }
    .sideData{
        width: 100%;
    }
    button{
    //margin-left: 10px;
    width: 100%;
    font-size: 20px;
    gap: 10px;
  }
  .project-tech-stac{
    width: 80%;
  }
  .techStacks{
    width: 80%;
  }
  .singleDiv img{
    width: 50%;
        height: 50%;
  }
  h3{
    margin-bottom: 5px;
  }
  p{
    font-size: 23px;
  }
  .singleDiv p{
    font-size: 25px;
  }
  .gitLive a{
    width: 40%;
    font-size: 10px;
  }
  .gitLive a button{
    font-size: 30px;
  }
 

}



@media only screen and (max-width: 650px) {
    .outerDiv{
        display: flex;
        flex-direction: column;
        width: 95%;
       // border: 1px solid ${(props) => (props.theme===true ? "white" : "black")};
        margin:auto;
        margin-bottom:20px;
        //border-radius:5px;
    }
    .indiP{
        width: 100%;
    }
    .indiP img{
width: 100%;
    }
    .sideData{
        width: 100%;
    }

  button{
    //margin-left: 10px;
    width: 100%;
    font-size: 20px;
    gap: 10px;
  }
  .project-tech-stac{
    width: 100%;
  }
  .techStacks{
    width: 100%;
  }
  .singleDiv img{
    width: 50%;
        height: 50%;
  }
  h3{
    margin-bottom: 5px;
  }


    }


`
export default Projects;

// Each project card in the Projects section should have class="project-card" and the following:
// Image of the project
// Title : class="project-title"
// Description : class="project-description"
// Tech stack used : class="project-tech-stack"
// Link to GitHub repository : class="project-github-link"
// Deployed link or video link : class="project-deployed-link"
