import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';

import './components/Global.scss'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function App() {

  const theme=useSelector((state)=>{return state.themeReducer.themeDark})
console.log(theme,"theme appjs")
  return (
    <DIV theme={theme}>
      <Navbar/>
      <AllRoutes/>
    </DIV>
  );
}

export default App;

const DIV=styled.div`
width: 100%;

background-color: ${(props) => (props.theme===true ? "black" : "white")};
color: ${(props) => (props.theme===true ? "white" : "black")};

@media only screen and (max-width: 600px) {
  width: 100%;
}

`


