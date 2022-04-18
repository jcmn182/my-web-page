//styles 
import styled from 'styled-components';
//motion
import {motion} from 'framer-motion';

const Logo = styled(motion.h1)`
display:block;
color: ${props => props.theme.body};
font-family: ${props => props.theme.fontDancing};

position:fixed;
left:2rem;
top:2rem;
z-index:3;

`
export const LogoComponent = () => {
    return (
        <Logo initial={{
            x:-200,
        }}
        animate={{
            x:0,
            transition: {type:'spring',duration:1.5,delay:.5}
        }}>
            Welcome
        </Logo>
    )
}


