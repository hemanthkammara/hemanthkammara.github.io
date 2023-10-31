import { Link } from "react-router-dom"
import styled from 'styled-components'
import profile from "../images/newBgPic.png"
export const Hero=()=>{

    return(
        <>
    <DIV>
        <div className="textSection">
            <h2 style={{fontSize:"35px",marginBottom:"5px"}}>Hey👋!</h2>
            <h3>I'm <span >Hemanth Kumar</span> </h3>
           <h2>Full Stack Web Developer.</h2>
        </div>
        
            <div className="imgDiv">

            <img src={profile} alt="" />
            
        </div>
    </DIV>
        </>
    )
}
const DIV=styled.div`
margin:auto;
margin-top: 125px;
/* background-color:black; */
margin-bottom:120px;
display: flex;


    .textSection{
        width: 50%;
       display:flex;
       flex-direction:column;
        align-items:center;
        justify-content:center
       
    }
    .imgDiv{
        width: 50%;
      
        
    }
    img{
        width: 50%;
       border-radius: 50% ;
       background-color:lightgrey;
      
    }
    h2{
        width: 50%;
        text-align: left;
        /* color:white; */
    }
    h3{
        width: 50%;
        text-align: left;
        /* color:white; */
    }
    h2,h3{
        margin: 0;
        padding: 0;
    }
    span{
        /* color: #87ceeb; */
        color: #691923;
        font-size: 35px;
        margin-left:10px;
    }
`