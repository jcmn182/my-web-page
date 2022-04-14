//styles 
import styled from 'styled-components';
//components
import {LogoComponent} from './subcomponents/LogoComponent.jsx';
import {SocialIcons} from './subcomponents/SocialIcons.jsx';
import {Intro} from './Intro.jsx';

// react router dom
import {Link} from 'react-router-dom';

// icons
import {BsWhatsapp} from 'react-icons/bs';

//hooks
import {useSizeScreen} from '../hooks/useSizeScreen';

//motion
import {motion} from 'framer-motion';


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
padding:2rem;
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
    z-index:3;
`;

const Skills = styled.div `
    color:${props => props.color>700?'#fff':'#000'};
    cursor: pointer;
    position: absolute;
    left: 25%;
    bottom: 2.5rem;
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
    animation: example .5s forwards;

    @keyframes example {
        from {height: 0%;}
        to {height: 50%;}
    }
   
`;

export const Main = () => {

    const {widthSize} = useSizeScreen();

    console.log(widthSize)

    return (
        <MainContainer>
            {widthSize>700?<DarkDivVertical/> :<DarkDivHorizontal/>}
                <Container>
                    <LogoComponent/>
                    <SocialIcons/>
                        <Link to="">
                            <Contact color={widthSize}>
                            <motion.h2 whileHover={{scale:1.1}}
                                whileTap={{scale:.9}}>        
                                    <BsWhatsapp className="style-icon"/>
                            </motion.h2>
                            </Contact>        
                        </Link>
                        <Intro/>
                        <Link to="/me">
                            <About color={widthSize}>
                                    <motion.h2 whileHover={{scale:1.1}}
                                        whileTap={{scale:.9}}>
                                        About
                                    </motion.h2>
                            </About>
                        </Link>
                        <Skills color={widthSize}>
                            <motion.h2 whileHover={{scale:1.1}} 
                                whileTap={{scale:.9}}>
                                Skills
                            </motion.h2>
                        </Skills>
                </Container>
        </MainContainer> 
    )
}
