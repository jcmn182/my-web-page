import styled from 'styled-components';

//hooks

import {useSizeScreen} from '../hooks/useSizeScreen.js';

//motion
import {motion} from 'framer-motion';

const Box = styled(motion.div)`



.desktop-box{
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

        z-index: 1;}

        .mobile-box{
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

`;

const SubBox = styled.div `
    width:100vh;
    position: ${props => props.position};
    display:flex;
`;

const Text = styled.div `
    font-size:calc(1em + 1.5vw);
    color: ${props => props.color === "black" ? "#000" : "#fff"};
    font-family: ${props => props.theme.fontRoboto};
    padding: ${props=> props.widthsize > 700 ? "3rem" : "5.5rem 4rem"};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content:center;
    z-index:1;

    .txt-one{
        font-size:calc(1em + 2.5vw);
        
    }

    .txt-two{
        font-size:calc(.7em + .5vw);
        
    }

    .txt-three{
        font-size:calc(.5em + 2vw);
        
    }

    @media   (max-width:700px){

    .txt-one{
        font-size:calc(1em + 8.5vw);
        
    }

    .txt-two{
        font-size:calc(1em + 3.5vw);
        
    }

    .txt-three{
        font-size:calc(1em + 1.5vw);
        
    } 

    };
        
    
`;

export const Intro = () => {

    const { widthSize } = useSizeScreen()

  return (

    
<Box>
   <motion.dev className={widthSize>700?"desktop-box":"mobile-box"} initial={{height:0}} animate={widthSize>700?{height:'55vh'}:{height:'90vh'}} transition={{type:'spring', duration:2, delay:1.5}}>
        <SubBox position={"static"} >
            <Text color={"white"} widthsize={widthSize}>
                <motion.div
                initial={{
                    y:-500,
                }}
                animate={{
                    y:0,
                    transition: {type:'spring',duration:2.5,delay:1.5}
                }}

                >
                    <p> <span className="txt-one">Hi!</span><br/>
                    <span className="txt-two">I'm Juan Carlos</span><br/>
                    <span > I'm front end developer</span></p>
                </motion.div>
            </Text>
        </SubBox>
        <SubBox>
                <Text color={"black"} widthsize={widthSize}>
                    <motion.dev initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2, delay:2}}>
                        <p><span className="txt-three">Interested in working<br/>
                        together?</span><br/>
                        Let's have a talk</p>
                    </motion.dev>     
                </Text>
        </SubBox>
    </motion.dev>
</Box>
  )
}
