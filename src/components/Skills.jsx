// styled components
import styled from 'styled-components';
//components
import {LogoComponent} from '../components/subcomponents/LogoComponent';
//hooks
import {useSizeScreen} from '../hooks/useSizeScreen';
//react router
import {Link} from 'react-router-dom';
//icons
import { SiPostgresql,  SiReact, SiRedux, 
        SiExpress, SiSequelize, SiTailwindcss, SiBootstrap, SiStyledcomponents,
        SiHtml5, SiCss3, SiJavascript
    } from 'react-icons/si';
import {FaNode} from 'react-icons/fa';
//motion
import { motion } from 'framer-motion';
//redux
import { useSelector } from 'react-redux';
//styles
const SkillsContainer = styled.div `
    width: 100vw;
    height: 100vh;
`;

const BoxDesktop = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${props => props.theme.text};
`;

const BoxMovile = styled.div`
    width: 100vw;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.text};
    padding-top: 5rem;
`;

const IconContainer = styled.div`
    width: auto;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(3rem,5fr));
    padding-top: 1rem;

    svg{
        margin:5px;
        height:2rem;
        width:3rem;
    };

`;

const Main = styled(motion.div)`

    border: 2px solid ${props => props.theme.body};
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    padding:${props => props.wz>700?"3rem":".5rem"};
    margin:${props => props.wz>700?"4rem":"1rem"};
    overflow: scroll;
    overflow-x: hidden;
    width:70%;
    height:50%;
    z-index: 3;
    line-height: 1.5;
    cursor: pointer;

    ::-webkit-scrollbar {
    display: none;
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

`;

const SubTitle = styled.h2`
    display: flex;
    justify-content:center;
    align-items:center;
    font-size: calc(1em + .5vw);
    font-family: ${props => props.theme.fontQuick};
    padding-top: 1rem;
`;

const Title = styled.h2`

display: flex;
justify-content:center;
align-items:center;
font-size: calc(1em + 1.5vw);
font-family: ${props => props.theme.fontQuick};
`;

const Description = styled.div`
display: flex;
justify-content:center;
align-items:center;
font-size: calc(1em + .1vw);
font-family: ${props => props.theme.fontQuick};
    
`;

const Text = styled.div`
    font-size: calc(1em + .1vw);
    font-family: ${props => props.theme.fontQuick};

    a{
        text-decoration: none;
        color: inherit;
    }
`;

const List = styled.ul`

    font-size: calc(1em + .1vw);
    font-family: ${props => props.theme.fontQuick};
    padding: 2rem;
    
`;

export const Skills = () => {

    const {widthSize} = useSizeScreen();

    const {englishOn} = useSelector((state) => state.changing);
    
    return (
    <SkillsContainer>
           <LogoComponent/>
            {widthSize>700?
            (<BoxDesktop>
                <Main initial={{ y:1000 }}
                animate={{ y:0, transition: {type:'spring',duration:2.5,delay:1.5} }}
                wz={widthSize} >
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2, delay:3.5}}>
                    <Title>{englishOn?"Knowledge":"Conocimiento"}</Title>
                    <Description>
                    {englishOn?"What i do as js fulltstack developer?"
                    :"¿Qué hago como desarrollador fullstack javascript?"} <br/>
                        {englishOn?"I can make interactive user interface components for web technology, build and work with APIs and databases using clean and reusable code. ":
                        "Puedo hacer componentes UI interactivos para tecnologías web,  construir y trabajar con APIs y bases de datos, empleando código reutilizable y limpio."}
                    </Description>
                    <SubTitle>{englishOn?"Tools":"Herramientas"}</SubTitle>
                   <IconContainer>
                   <div className="tooltip">
                    <SiHtml5 className="html-style"/>
                    <span className="tooltiptext">HTML</span>
                    </div>
                    <div className="tooltip">
                    <SiCss3/>
                    <span className="tooltiptext">CSS</span>
                    </div>
                    <div className="tooltip">
                    <SiJavascript/>
                    <span className="tooltiptext">Javascript</span>
                    </div>
                    <div className="tooltip">
                    <SiReact/>
                    <span className="tooltiptext">React</span>
                    </div>
                    <div className="tooltip">
                    <SiRedux/>
                    <span className="tooltiptext">Redux</span>
                    </div>
                    <div className="tooltip">
                    <SiTailwindcss/>
                    <span className="tooltiptext">Tailwind</span>
                    </div>
                    <div className="tooltip">
                    <SiBootstrap/>
                    <span className="tooltiptext">Bootstrap</span>
                    </div>
                    <div className="tooltip">
                    <SiStyledcomponents/>
                    <span className="tooltiptext">Styled components</span>
                    </div>
                    <div className="tooltip">
                    <FaNode/> 
                    <span className="tooltiptext">Node</span>
                    </div>
                    <div className="tooltip">
                    <SiExpress/>
                    <span className="tooltiptext">Express</span>
                    </div>
                    <div className="tooltip ">
                    <SiPostgresql/>
                    <span className="tooltiptext">Postgresql</span>
                    </div>
                    <div className="tooltip">
                    <SiSequelize/>
                    <span className="tooltiptext">Sequelize</span>
                    </div>
                   </IconContainer>
                </motion.div>
                </Main>
                <Main
                initial={{y:-1000,}}
                animate={{y:0,transition: {type:'spring',duration:2.5,delay:1.5}}} wz={widthSize}>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2, delay:3.5}}>
                    <Title>{englishOn?"Skills":"Habilidades"}</Title>
                    <List>
                        <li>{englishOn?"Responsible":"Responsable"}</li>
                        <li>{englishOn?"Engaged":"Comprometido"}</li>
                        <li>{englishOn?"Teamwork":"Trabajo en equipo"}</li>
                        <li>{englishOn?"Self-taught":"Autodidacta"}</li>
                        <li>{englishOn?"Assertive":"Asertivo"}</li>
                    </List>
                    <Text>
                        {englishOn?
                        <Link to="/redirectCvEnglish" target="_blank">¡You cand find my cv here!</Link>
                        :<Link to="/redirectCvSpanish" target="_blank">¡Puedes encontrar mi cv aqui!</Link>
                        }
                    </Text>
                </motion.div>
                </Main>
            </BoxDesktop>):
            (<BoxMovile>
                <Main initial={{ y:1000 }}
                animate={{ y:0, transition: {type:'spring',duration:2.5,delay:1.5} }}
                wz={widthSize} >
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2, delay:3.5}}>
                <Title>{englishOn?"Knowledge":"Conocimiento"}</Title>
                    <Description>
                    {englishOn?"What i do as js fulltstack developer?"
                    :"¿Qué hago como desarrollador fullstack javascript?"} <br/>
                        {englishOn?"I can make interactive user interface components for web technology, build and work with APIs and databases using clean and reusable code. ":
                        "Puedo hacer componentes UI interactivos para tecnologías web,  construir y trabajar con APIs y bases de datos, empleando código reutilizable y limpio."}
                    </Description>
                    <SubTitle>{englishOn?"Tools":"Herramientas"}</SubTitle>
                   <IconContainer>
                   <div className="tooltip">
                    <SiHtml5 className="html-style"/>
                    <span className="tooltiptext">HTML</span>
                    </div>
                    <div className="tooltip">
                    <SiCss3/>
                    <span className="tooltiptext">CSS</span>
                    </div>
                    <div className="tooltip">
                    <SiJavascript/>
                    <span className="tooltiptext">Javascript</span>
                    </div>
                    <div className="tooltip">
                    <SiReact/>
                    <span className="tooltiptext">React</span>
                    </div>
                    <div className="tooltip">
                    <SiRedux/>
                    <span className="tooltiptext">Redux</span>
                    </div>
                    <div className="tooltip">
                    <SiTailwindcss/>
                    <span className="tooltiptext">Tailwind</span>
                    </div>
                    <div className="tooltip">
                    <SiBootstrap/>
                    <span className="tooltiptext">Bootstrap</span>
                    </div>
                    <div className="tooltip">
                    <SiStyledcomponents/>
                    <span className="tooltiptext">Styled components</span>
                    </div>
                    <div className="tooltip">
                    <FaNode/> 
                    <span className="tooltiptext">Node</span>
                    </div>
                    <div className="tooltip">
                    <SiExpress/>
                    <span className="tooltiptext">Express</span>
                    </div>
                    <div className="tooltip ">
                    <SiPostgresql/>
                    <span className="tooltiptext">Postgresql</span>
                    </div>
                    <div className="tooltip">
                    <SiSequelize/>
                    <span className="tooltiptext">Sequelize</span>
                    </div>
                   </IconContainer>
                </motion.div>
                </Main>
                <Main initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2, delay:2}}
                wz={widthSize}
                >
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2, delay:3.5}}>
                <Title>{englishOn?"Skills":"Habilidades"}</Title>
                    <List>
                        <li>{englishOn?"Responsible":"Responsable"}</li>
                        <li>{englishOn?"Engaged":"Comprometido"}</li>
                        <li>{englishOn?"Teamwork":"Trabajo en equipo"}</li>
                        <li>{englishOn?"Self-taught":"Autodidacta"}</li>
                        <li>{englishOn?"Assertive":"Asertivo"}</li>
                    </List>
                    <Text>
                        {englishOn?
                        <Link to="/redirectCvEnglish" target="_blank">¡You cand find my cv here!</Link>
                        :<Link to="/redirectCvSpanish" target="_blank">¡Puedes encontrar mi cv aqui!</Link>
                        }
                    </Text>
                </motion.div>
                </Main>
                
            </BoxMovile>)}
    </SkillsContainer>
    )
}
