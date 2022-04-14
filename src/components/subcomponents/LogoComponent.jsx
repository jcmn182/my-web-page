//styles 
import styled from 'styled-components';


const Logo = styled.h1`
display:block;
color: ${props => props.theme.body};
font-family: 'Dancing Script', cursive;

position:fixed;
left:2rem;
top:2rem;
z-index:3;

`
export const LogoComponent = () => {
    return (
        <Logo>
            Welcome
        </Logo>
    )
}


