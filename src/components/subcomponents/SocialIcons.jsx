import {NavLink} from 'react-router-dom'
// icons
import {BsLinkedin,BsGithub} from 'react-icons/bs';
//styled
import styled from 'styled-components';

//hooks
import {useSizeScreen} from '../../hooks/useSizeScreen.js';

//motion
import {motion} from 'framer-motion';

//styles
const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index:1;
`;
const Line = styled.span`
    width: 2px;
    height:8rem;
    background-color:${props => props.background>700?'#fff':'#000'};
`;
const IconStyle = styled.div`
 color: ${props => props.color>700?'#fff':'#000'};
 margin-bottom:10px;

 .style-icon{
    height:25px;
    width:25px;
 }
`;



export const SocialIcons = () => {

   const {widthSize} = useSizeScreen();

  return (
    <Icons>
            <NavLink to="/redirectLinkedin"  target="_blank">
                <IconStyle color={widthSize}>
                <motion.div whileHover={{scale:1.1}}
                                whileTap={{scale:.9}}>
                    <BsLinkedin className="style-icon"/>
                </motion.div>
                </IconStyle>
            </NavLink>
            <NavLink to="/redirectGitHub"  target="_blank">
                <IconStyle color={widthSize}>
                <motion.div whileHover={{scale:1.1}}
                                whileTap={{scale:.9}}>
                    <BsGithub className="style-icon"/>
                </motion.div>
                </IconStyle>
            </NavLink> 
        <Line background={widthSize}/>
    </Icons>
  )
}
