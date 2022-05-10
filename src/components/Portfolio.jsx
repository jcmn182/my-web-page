// styled components
import styled from 'styled-components';
//components
import {LogoComponent} from '../components/subcomponents/LogoComponent';
//hooks
import {useSizeScreen} from '../hooks/useSizeScreen';
//react router
import {Link} from 'react-router-dom';
//motion
import { motion } from 'framer-motion';
//redux
import { useSelector } from 'react-redux';
//styles
const PortfolioContainer = styled.div `
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.text};
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

export const Portfolio = () => {

    const {widthSize} = useSizeScreen();

    const {englishOn} = useSelector((state) => state.changing);
    
    return (
    <PortfolioContainer>
           <LogoComponent/>
            
    </PortfolioContainer>
    )
}

