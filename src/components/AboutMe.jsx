import styled from 'styled-components'
export const AboutMe=()=>{

    return(
       <DIV>
        <h1>About Me</h1>
        <div className='aboutDiv'>


        <p>
        "I'm Hemanth Kumar, a dedicated full-stack web developer with a strong focus on building user-centric web applications. I'm passionate about creating robust, modern websites and thrive on problem-solving. My background includes extensive experience in both front-end and back-end development. I'm committed to delivering high-quality, scalable solutions and continuously expanding my skillset. My goal is to drive value for the organizations I work with through innovative web development." 
        </p>
  
        </div>
       
       </DIV>
    )
}
const DIV=styled.div`
/* p{
    color: white;
}
h1{
    color: white;
    margin-top: 25px;
} */

.aboutDiv{

    margin:auto;
    width: 80%;
    
    /* border: 1px solid white; */
    border: 1px solid black;
    border-radius:25px;
    padding: 35px;
    margin-top: 45px;
    
}



p{
    font-size: 25px;
}
img{
    width: 50px;
    height:50px;
}

.techName{
    margin-top: 0;
}

h1{
    text-align:center;
}
`