import styled from 'styled-components'
export const Github=()=>{
    return(
        <DIV>
            <h1>Github Stats</h1>


            <div className='gridGit'>

            <p>&nbsp;<img align="center"  src="https://github-readme-stats.vercel.app/api?username=hemanthkammara&show_icons=true&locale=en" alt="hemanthkammara" /></p>

            
            <p ><img align="left"  src="https://github-readme-stats.vercel.app/api/top-langs?username=hemanthkammara&show_icons=true&locale=en&layout=compact" alt="hemanthkammara" /></p>
            <p ><img align="center"  src="https://github-readme-streak-stats.herokuapp.com/?user=hemanthkammara&" alt="hemanthkammara" /></p>




            </div>

        </DIV>
    )
}
const DIV=styled.div`
    display: flex;
    flex-direction:column;
    margin-top:75px;


    .gridGit{
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;

        /* display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 10px; */
      

    }
p{
    margin: 0;
    padding: 0;
    
    align-items:center;
}
    h1{
        text-align: center;
    }
`