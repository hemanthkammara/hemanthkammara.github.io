
import styled from 'styled-components'

export const TechStacks=()=>{
    return (
       
        <DIV>
            <h1 style={{marginTop:"40px",marginBottom:"35px"}}>Skills</h1>
        <div className='outerDiv'>

            <div className='gridDiv'>

                    <div className="singleDiv">
                        <img src="https://img.icons8.com/officel/160/react.png" alt="react"/>
                        <p className='teckName'>react</p>
                    </div>
                    <div className="singleDiv">
                    <img width="160" height="160" src="https://img.icons8.com/office/160/express-js.png" alt="express-js"/>
                        <p className='teckName'>express js</p>
                    </div>

                    <div className="singleDiv">
                    <img width="240" height="240" src="https://img.icons8.com/fluency/240/node-js.png" alt="node-js"/>
                        <p className='teckName'>node js</p>
                    </div>

                    <div className="singleDiv">
                    <img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo"/>
                        <p className='teckName'>mongo db</p>
                    </div>

                    
                    <div className="singleDiv">
                    <img width="240" height="240" src="https://img.icons8.com/color/240/typescript.png" alt="typescript"/>
                        <p className='teckName'>type script</p>
                    </div>

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
        </div>
            


        </DIV>
    )
}
const DIV=styled.div`
margin-bottom:50px;
.outerDiv{

    width: 70%;
    border:1px solid black;
    /* border:1px solid white; */
    border-radius: 25px;
    display: flex;
   justify-content: center; /* Center horizontally */
   align-items: center;
   margin: auto;
   padding: 30px;
}

h1{
   text-align: center;  
   /* color : white; */
}
p{
    /* color: white; */
}

.gridDiv{

    width: 70%;
    margin: auto;
    /* border: 1px solid black; */
    display: grid;
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

    img{
        width: 100px;
        height: 100px;
      
    }
    p{
        text-align:center;
        font-size: 25px;
        padding: 0;
        margin: 0;
    }
`