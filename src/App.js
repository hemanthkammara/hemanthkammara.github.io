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

background-color: ${(props) => (props.theme===true ? "black" : "white")};
color: ${(props) => (props.theme===true ? "white" : "black")};


`


