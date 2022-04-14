// styles
import { GlobalStyle } from "./styles/GlobalStyle.js";
import {ThemeProvider} from 'styled-components'
import {lightTheme} from './styles/themes.js'

//react router dom
import {Routes, Route} from 'react-router-dom'

//components
import {Main} from './components/Main.jsx';
import {AboutMe} from './components/AboutMe.jsx';
import {MySkills} from './components/MySkills.jsx';
import {Redirect} from './components/Redirect.jsx';


function App() {

  const urlGitHub = "https://github.com/jcmn182";

  const urlLinkedin = "https://www.linkedin.com/in/juan-carlos-macias-najera-317aa321b/";

  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle/>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="me" element={<AboutMe/>}/>
              <Route path="skills" element={<MySkills/>}/>
              <Route path="/redirectGitHub" element={<Redirect url={ urlGitHub } />} />
              <Route path="/redirectLinkedin" element={<Redirect url={ urlLinkedin } />} />
          </Routes>
      </ThemeProvider>
    </div>
    
  );
}

export default App;
