import styled from 'styled-components'
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { AboutMe } from './components/AboutMe';
import { TechStacks } from './components/TechStacks';
import { Projects } from './components/Projects';
import { Github } from './components/Github';
import { Contact } from './components/Contack';

function App() {
  return (
    <DIV className="App">
      
             
     <Navbar/>
     <Hero/>
     <AboutMe/>
     <TechStacks/>
     <Projects/>

    <Github/>
    <Contact/>
    </DIV>
  );
}
const DIV=styled.div`
/* background-color:black; */

/* height: 10005px; */
`

export default App;
