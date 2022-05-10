//styles 
import styled from 'styled-components';
//components
import {LogoComponent} from './subcomponents/LogoComponent.jsx';
import {SocialIcons} from './subcomponents/SocialIcons.jsx';
import {Intro} from './Intro.jsx';
import {ToggleLanjuageComponent} from '../components/ToggleLanjuageComponent.jsx';

// react router dom
import {Link} from 'react-router-dom';

// icons
import {BsWhatsapp} from 'react-icons/bs';

//hooks
import {useSizeScreen} from '../hooks/useSizeScreen';

//motion
import {motion} from 'framer-motion';

//redux
import { useSelector } from 'react-redux';



const MainContainer = styled.div `
    background: ${props => props.theme.body};
    width:100vw;
    height:100vh;
    overflow:hidden;
    position:relative;

    h2,h3,h4,h5,h6{
        font-family: 'karla', sans-serif;
        font-weight: 500;
    }
`;

const Container = styled.div`
    padding:1rem;
`

const Contact = styled.div `
    color:${props => props.color>700?'#000':'#fff'};
    margin-bottom:10px;
    position: absolute;
    top: 3rem;
    right:2rem;
    z-index:1;

    .style-icon{
        height:25px;
        width:25px;
 }
`;

const About = styled.div `
    color:${props => props.theme.text};
    right: 25%;
    position: absolute;
    cursor: pointer;
    bottom: 2.5rem;
    font-size:calc(.7em + .1vw);
    z-index:3;
`;

const Skills = styled.div `
    color:${props => props.color>700?'#fff':'#000'};
    cursor: pointer;
    position: absolute;
    left: 25%;
    bottom: 2.5rem;
    font-size:calc(.7em + .1vw);
    z-index:3;
`;

const DarkDivVertical = styled.div`
    position: absolute;
    top: 0;
    background-color: #000000;
    bottom:0;
    right:50;
    width: 50%;
    height: 0%;
    z-index: 1;
    animation: example 2.5s forwards;

    @keyframes example {
        from {height: 0%;}
        to {height: 100%;}
    }
   
`;

const DarkDivHorizontal = styled.div`
    position: absolute;
    top: 0;
    background-color: #000000;
    bottom:0;
    right:50;
    width: 100%;
    height: 0;
    z-index: 1;
    animation: example 1.5s forwards;

    @keyframes example {
        from {height: 0%;}
        to {height: 50%;}
    }
   
`;

export const Main = () => {

    const {englishOn} = useSelector((state) => state.changing);

    const {widthSize} = useSizeScreen();

    return (
        <MainContainer>
            {widthSize>700?<DarkDivVertical/> :<DarkDivHorizontal/>}
                <Container>
                        <LogoComponent/>
                        <SocialIcons/>
                        {englishOn?
                        <Link to="/redirectWpEnglish" target="_blank">
                            <Contact color={widthSize}>
                            <motion.h2 
                                initial={{
                                    x:200,
                                }}

                                animate={{
                                    x:0,
                                    transition: {type:'spring',duration:1.5,delay:.8}
                                }}

                                whileHover={{scale:1.1}}
                                whileTap={{scale:.9}}

                                >        
                                    <BsWhatsapp className="style-icon"/>
                            </motion.h2>
                            </Contact>        
                        </Link>:
                        <Link to="/redirectWpSpanish" target="_blank">
                        <Contact color={widthSize}>
                        <motion.h2 
                            initial={{
                                x:200,
                            }}

                            animate={{
                                x:0,
                                transition: {type:'spring',duration:1.5,delay:.8}
                            }}

                            whileHover={{scale:1.1}}
                            whileTap={{scale:.9}}

                            >        
                                <BsWhatsapp className="style-icon"/>
                        </motion.h2>
                        </Contact>        
                    </Link>
                        }
                        <ToggleLanjuageComponent/>
                        <Intro/>

                        <Link to="me/skills">
                            <About color={widthSize}>
                                    <motion.h2 
                                        initial={{
                                            y:200,
                                        }}
                                        animate={{
                                            y:0,
                                            transition: {type:'spring',duration:1.5,delay:1}
                                        }}
        

                                        whileHover={{scale:1.1}}
                                        whileTap={{scale:.9}}>
                                         {englishOn?"Skills":"Habilidades"}
                                    </motion.h2>
                            </About>
                        </Link>
                    <Link to="/work/portfolio">
                        <Skills color={widthSize}>
                            <motion.h2 
                                initial={{
                                    y:200,
                                }}
                                animate={{
                                    y:0,
                                    transition: {type:'spring',duration:1.5,delay:1}
                                }}
                                whileHover={{scale:1.1}} 
                                whileTap={{scale:.9}}>
                                {englishOn?"Portfolio":"Portafolio"}
                            </motion.h2>
                        </Skills>
                    </Link>    
                </Container>
        </MainContainer> 
    )
}
