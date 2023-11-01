import GitHubCalendar from "react-github-calendar";

export default function Github() {
  return (
    <div className="gitcont">
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
      <div className="hh">
        <GitHubCalendar username="hemanthkammara"></GitHubCalendar>
      </div>

      {/* <p  style={{ width: "120%",textAlign:"center",marginLeft:"25px",marginBottom:"20px" }}></p> */}


<div className="img_div">


      <img
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
      />


</div>
    </div>
  );
}
