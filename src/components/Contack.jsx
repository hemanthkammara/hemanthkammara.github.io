import styled from "styled-components"
export const Contact =()=>{
    return(
        <DIV>
            <h1>Contact</h1>
            <div className="form">
                <label htmlFor=""> name</label>
                <br />
                <input type="text" placeholder="your name " />
                <br />
                <label htmlFor=""> email</label>
                <br />
                <input type="text" placeholder="your email " />
                <br />
                <label htmlFor="">message</label>
                <br />
                <textarea name="" id="" cols="30" rows="10" placeholder="your message"></textarea>
                <br />
                <button>Submit</button>

            </div>
        </DIV>
    )
}
const DIV =styled.div`
margin-top:100px;
h1{
    text-align: center;
}
    .form{
        border: 1px solid black;
        border-radius: 25px;
        width: 40%;
        margin: auto;
        padding: 10px;
        padding-left:50px;
       
    }

    input,label,br{
        margin: 0;
        padding: 0;
    }
    label{
        font-size: 20px;
    }
`