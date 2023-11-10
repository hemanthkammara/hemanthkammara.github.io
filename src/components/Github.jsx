import GitHubCalendar from "react-github-calendar";
import styled from "styled-components";
import Github1 from "./Github1";

export default function Github() {

  return (
    <DIV className="gitcont">
      <div className="gitH">

      <h1
        style={{
          fontSize: "30px",
          marginBottom: "30px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Github
      </h1>
      </div>
      <div className="hh">
        <GitHubCalendar className="calender" username="hemanthkammara"></GitHubCalendar>
      </div>

      <div className="git">
        <Github1/>
      </div>

      {/* <p  style={{ width: "120%",textAlign:"center",marginLeft:"25px",marginBottom:"20px" }}></p> */}


 
<div className="img_div">


      {/* <img
        id="github-top-langs"
        // style={{ width: "100%" }}
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=hemanthkammara&theme=light&hide_border=false&include_all_commits=false&count_private=true&layout=compact"
        alt="hemanthkammara"
      />

      <img
        id="github-stats-card"
        // style={{ width: "100%" }}
        src="https://github-readme-stats.vercel.app/api?username=hemanthkammara&theme=light&hide_border=false&include_all_commits=true&count_private=true"
        alt="hemanthkammara"
      />

      <img
        id="github-streak-stats"
        // style={{ width: "100%" }}
        src="https://github-readme-streak-stats.herokuapp.com?user=hemanthkammara"
        alt="hemanthkammara"
      /> */}


</div>
    </DIV>
  );
}
const DIV=styled.div`
   h1{
  display: inline;
  justify-content: center;
   text-align: center;  
   /* color : white; */
 //  border-bottom: 3px solid #691923;
 border-bottom: 3px solid #d63447;
}


.gitH{
  text-align: center; 
  padding: 10px;
  margin-bottom: 15px;
}
.git{
  width: 90%;
}



`