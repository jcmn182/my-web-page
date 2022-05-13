// styles
import { GlobalStyle } from "./styles/GlobalStyle.js";
import {ThemeProvider} from 'styled-components'
import {lightTheme} from './styles/themes.js'

//react router dom
import {Routes, Route} from 'react-router-dom'

//components
import {Main} from './components/Main.jsx';
import {Skills} from './components/Skills.jsx';
import {Portfolio} from './components/Portfolio.jsx';
import {Redirect} from './components/Redirect.jsx';


function App() {

  const urlEcommerce = "https://wonderful-profiterole-5aa79c.netlify.app/";

  const urlAppWeather = "https://jolly-noyce-f9ec52.netlify.app/";

  const urlUIpinterest = "https://scintillating-liger-954891.netlify.app/";

  const urlGitHub = "https://github.com/jcmn182";

  const urlLinkedin = "https://www.linkedin.com/in/juan-carlos-macias-najera-317aa321b/";

  const urlCvSpanish = "https://drive.google.com/file/d/1UJreggVcVqChV7Qi0F7Sh2IH7-Gfmm5c/view?usp=sharing";

  const urlCvEnlgish = "https://drive.google.com/file/d/1f3r-I-ivBjVMaO3jYo1USW-45NTNlwcU/view?usp=sharing";

  const urlEnglishWhatsApp = "https://api.whatsapp.com/send?phone=5213311912085&text=I%20would%20like%20to%20talk%20with%20you%20%F0%9F%98%83";

  const urlSpanishWhatsApp = "https://api.whatsapp.com/send?phone=5213311912085&text=Me%20gustaria%20platicar%20contigo%20%F0%9F%98%83";

  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle/>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/me/:param" element={<Skills/>}/>
              <Route path="/work/:param" element={<Portfolio/>}/>
              <Route path="/redirectGitHub" element={<Redirect url={ urlGitHub } />} />
              <Route path="/redirectLinkedin" element={<Redirect url={ urlLinkedin } />} />
              <Route path="/redirectCvSpanish" element={<Redirect url={ urlCvSpanish } />} />
              <Route path="/redirectCvEnglish" element={<Redirect url={ urlCvEnlgish } />} />
              <Route path="/redirectWpEnglish" element={<Redirect url={ urlEnglishWhatsApp } />} />
              <Route path="/redirectWpSpanish" element={<Redirect url={ urlSpanishWhatsApp } />} />
              <Route path="/redirectEcommerce" element={<Redirect url={ urlEcommerce } />} />
              <Route path="/redirectAppWeather" element={<Redirect url={ urlAppWeather } />} />
              <Route path="/redirectPinterest" element={<Redirect url={ urlUIpinterest } />} />
          </Routes>
      </ThemeProvider>
    </div>
    
  );
}

export default App;
