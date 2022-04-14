import styled from 'styled-components';

//hooks

import {useSizeScreen} from '../hooks/useSizeScreen.js';

//motion
import {motion} from 'framer-motion';

const Box = styled(motion.div)`
    position:absolute;
    left: 50%;
    right: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width:100vh;
    display: flex;

    background: linear-gradient( 
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(

        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;

        background-repeat:no-repeat;
        background-size: 100% 2px;

        border-left:  2px solid ${props => props.theme.body};
        border-right:  2px solid ${props => props.theme.text};

        z-index: 1;
`;

const SubBox = styled.div `
    width: 100%;
    position: relative;
    display:flex;
`;

const Text = styled.div `
    font-size:calc(1em + 1.5vw);
    color: ${props => props.color === "black" ? "#000" : "#fff"};
    font-family: ${props => props.theme.fontRoboto};
    padding: 3rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .txt-one{
        font-size:calc(1em + 2.5vw);
        
    }

    .txt-two{
        font-size:calc(.7em + .5vw);
        
    }

    .txt-three{
        font-size:calc(.5em + 2vw);
        
    }
`;

export const Intro = () => {

    const { widthSize } = useSizeScreen()

  return (

    

   <Box initial={{height:0}} animate={{height:'55vh'}} transition={{type:'spring', duration:2, delay:1.5}}>
       
        <SubBox>
            <Text color={"white"}>
                <p> <span className="txt-one">Hi!</span><br/>
                <span className="txt-two">I'm Juan Carlos</span><br/>
                <span > I'm front end developer</span></p>
            </Text>
        </SubBox>
        <SubBox>
                <Text color={"black"}>
                    <motion.dev initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2, delay:2}}>
                        <p><span className="txt-three">Interested in working
                        together?</span><br/>
                        Let's have a talk</p>
                    </motion.dev>     
                </Text>
        </SubBox>
    </Box>
  )
}
