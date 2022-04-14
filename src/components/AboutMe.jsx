import styled, {ThemeProvider} from 'styled-components';

import {darkTheme} from '../styles/themes.js';

import Particles from "react-tsparticles";

import { SiPostgresql, SiNodedotjs, SiReact, SiRedux, 
        SiExpress, SiSequelize, SiTailwindcss, SiBootstrap, SiStyledcomponents, SiGit
    } from 'react-icons/si';


const Box = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;

export const AboutMe = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <Particles theme="dark"/>
                hello
            </Box>
        </ThemeProvider>
    )
}
