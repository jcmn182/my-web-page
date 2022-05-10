//styles 
import styled from 'styled-components';
//motion
import {motion} from 'framer-motion';
//redux
import { useSelector } from 'react-redux';
//react router
import {Link,useParams} from 'react-router-dom';
//Icons
import {MdArrowBackIosNew} from 'react-icons/md';

const Logo = styled(motion.h1)`
display:block;
color: ${props => props.theme.body};
font-family: ${props => props.theme.fontDancing};
position:fixed;
left:2rem;
top:2rem;
z-index:3;

a{
    color: ${props => props.theme.body};
    text-decoration: none;
}

`
export const LogoComponent = () => {

    let skills = useParams();

    const isEmpty = Object.keys(skills).length === 0;
   
   console.log(skills)

    const {englishOn} = useSelector((state) => state.changing);

    return (
        <Logo initial={{
            x:-200,
        }}
        animate={{

            x:0,
            transition: {type:'spring',duration:1.5,delay:.5}
        }}>
           <Link to="/">{ !isEmpty?<MdArrowBackIosNew/>:(englishOn?"Welcome":"Bienvenidos")}</Link>
        </Logo>
    )
}


