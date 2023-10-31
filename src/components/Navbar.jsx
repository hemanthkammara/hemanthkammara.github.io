import { Link } from "react-router-dom"
import styled from 'styled-components'

export const Navbar=()=>{
    return(
        <>
        <DIV>
            <div className="nameDiv">
            <Link className="tag" >Hemanth</Link>
            </div>

            <div className="sideDiv">

            <Link className="tag" >Home</Link>
            <Link className="tag">About</Link>
            <Link className="tag">Skills</Link>
            <Link className="tag" >projects</Link>
            <Link className="tag">contacts</Link>
            </div>

        </DIV>
        </>
    )
}
const DIV=styled.div`
position:sticky;
display: flex;
.nameDiv{
    width: 50%;
    padding-left:20px;
}
.sideDiv{
  width:50% ;
    display: flex;
    justify-content: space-around;
   
    /* border: 1px solid black; */
    height: 45px;
    align-items:center;
}
/* background-color:black; */

    .tag{
        /* color: white; */
        font-size: 25px;
        text-decoration: none;
        
    }
    
`