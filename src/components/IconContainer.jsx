//styled 
import styled from 'styled-components';

const MainContainer = styled.div`

`;




export const IconContainer = (props) => {
    const icons = props.children;
    console.log(icons)
  return (
    <MainContainer>
        {props.children}
    
    </MainContainer>
  )
}
