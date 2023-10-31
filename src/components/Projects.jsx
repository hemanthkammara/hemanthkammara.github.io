import { Link } from "react-router-dom"
import styled from 'styled-components'
import explore from "../projectImages/explore.png"
import ecofood from "../projectImages/ecofood.png"
import travelo from "../projectImages/travelo.png"
import { AiFillGithub } from "react-icons/ai";


export const Projects=()=>{

    return(
        <DIV>
            <h1>Projects</h1>

            <div className="outerDiv">
                <div className="indiP">

                    <img className="projectPic" src={explore} alt="" />
                    </div>
                    <div className="sideData">
                        <h3>Explore</h3>

                        <p> a travel website that combines stunning destination showcases with a seamless flight booking experience. This website is not just a beautiful visual journey through the world's most incredible places but also a practical tool for travelers to easily book their flights. </p>

                        <div className="techStacks">
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
                            <a href="https://github.com/hemanthkammara/skillful-dog-1445"><button>Git hub</button></a>
                            <a href="https://adorable-gaufre-5079aa.netlify.app/ "><button>Go Live</button></a>
                        </div>

                    </div>
                
            </div>



            <div className="outerDiv">
                <div className="indiP">

                    <img className="projectPic" src={travelo} alt="" />
                    </div>
                    <div className="sideData">
                        <h3>Travelo</h3>

                        <p>Introducing my travel website, where booking multiple destinations in one journey is made simple. . With a user-friendly interface and robust booking features, this site redefines the way you explore the world </p>

                        <div className="techStacksTravelo">
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
                            <a href="https://github.com/audacity07/travello"><button>Git hub</button></a>
                            <a href="https://sensational-starship-6bc092.netlify.app/"><button>Go Live</button></a>
                        </div>

                    </div>
                
            </div>

            <div className="outerDiv">
                <div className="indiP">

                    <img className="projectPic" src={ecofood} alt="" />
                    </div>
                    <div className="sideData">
                        <h3>Eco Food</h3>

                        <p>a dynamic online platform for fresh and delectable farm-fresh vegetables, fruits, and a selection of premium meats, including chicken, mutton, and seafood, delivered to your doorstep. </p>

                        <div className="techStacksTravelo">
                                


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
                            <a href="https://github.com/ankitsimari/sleek-circle-8356"><button>Git hub</button></a>
                            <a href="https://ecofoodankit.vercel.app/"><button>Go Live</button></a>
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
}

    .outerDiv{
        display: flex;
        width: 70%;
        border: 1px solid black;
        margin:auto;
        border-radius:35px;
        margin-bottom:35px;
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
        border-top-left-radius:35px;
        border-bottom-left-radius:35px;
       
    }

    .techStacks{

    width: 70%;
    margin: auto;
    /* border: 1px solid black; */
    /* display: grid; */
    display: flex;
    /* grid-template-columns: repeat(4,1fr); */
    row-gap: 10px;
    }
    .techStacksTravelo{

    width: 70%;
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
    }
    .gitLive{
        width: 70%;
        
        display: flex;
        justify-content:space-evenly;
        margin:auto;
    }

    button{
        /* bg="black" color="white" mt={5} mb={5} width="80%" height="30px" */
        
        color:  #691923;
        color: black;
        width: 150%;
        font-size:15px;
        border-radius: 5px;
        border: none;
        
    }
    .gitlogo{
        width: 10%;
    }
`