import {Link} from 'react-router-dom'
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
const Line = styled(motion.span)`
    width: 2px;
    background-color:${props => props.wz>700?'#fff':'#000'};
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
            <Link to="/redirectLinkedin"  target="_blank">
                <IconStyle color={widthSize}>
                <motion.div 
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1]}}
                transition={{type:'spring',duration:.8, delay:2.9}}
                whileHover={{scale:1.1}}
                whileTap={{scale:.9}}
                >
                    <BsLinkedin className="style-icon"/>
                </motion.div>
                </IconStyle>
            </Link>
            <Link to="/redirectGitHub"  target="_blank">
                <IconStyle color={widthSize}>
                <motion.div
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1]}}
                transition={{type:'spring',duration:.8, delay:2.5}} 
                whileHover={{scale:1.1}}
                whileTap={{scale:.9}}
                >
                    <BsGithub className="style-icon"/>
                </motion.div>
                </IconStyle>
            </Link> 
        <Line wz={widthSize} 
        initial={{height:0}}
        animate={{height:widthSize>700?'8rem':'6rem'}}
        transition={{type:'spring', duration:1.5, delay:2}}
        />
    </Icons>
  )
}
