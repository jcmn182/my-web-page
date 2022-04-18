// styled components
import styled from 'styled-components'
//components
import {ParticlesComponent} from './particles/ParticlesComponents.jsx';

import { SiPostgresql, SiNodedotjs, SiReact, SiRedux, 
        SiExpress, SiSequelize, SiTailwindcss, SiBootstrap, SiStyledcomponents, SiGit
    } from 'react-icons/si';

const Box = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Main = styled.div`
    border: 2px solid ${props => props.theme.body};
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    padding: 2rem;
    width:30vw;
    height:60vh;
    z-index: 3;
    line-height: 1.5;
    cursor: pointer;

    &:hover{
        color:${props => props.theme.text} ;
        background-color: ${props => props.theme.body}
    }
`;

const Title = styled.h2`

display: flex;
justify-content:center;
align-items:center;
font-size: calc(1em +1vw);
 
 ${Main}:hover &{
        color:${props => props.theme.body} ;
    }
`;

const Description = styled.div`
    


`


export const AboutMe = () => {
    return (
        <>
            <ParticlesComponent/>
            <Box>
                <Main>
                    <Title></Title>
                    <Description></Description>
                </Main>
                <Main>
                    <Title></Title>
                    <Description></Description>
                </Main>
            </Box>
        </>
    )
}
