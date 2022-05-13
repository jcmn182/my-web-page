// styled components
import styled from 'styled-components'
//react hooks 
import {useState} from 'react';
//hooks
import {useSizeScreen} from '../hooks/useSizeScreen';
//redux
import { useDispatch} from 'react-redux';
import {spa,eng} from '../redux/features/changingLanguageSlice';
//motion
import {motion} from 'framer-motion';
//styles
const ToggleContainer = styled(motion.div)`

    position: absolute;
    top: 3rem;
    right:4.3rem;
    z-index:1;
    font-family: 'karla', sans-serif;
    color: ${props => props.color>700? "#000" :'#cfd4d6'};


label {
    position: relative;
}

input {
    position: absolute;
    left: -9999px;
    top: -9999px;
}

input:checked + div {
    background-color: ${props => props.color>700? "#cfd4d6" :'#17202A'};
}
input:checked + div::before {
    /* left: 43px; */
    left: calc(100% - 3px);
    transform: translateX(-100%);
}


.container div {
    display: flex;
    cursor: pointer;
    width: 50px;
    height: 25px;
    border-radius: 50px;
    background-color: ${props => props.color>700? "#cfd4d6" :'#17202A'};
    position: relative;
    transition: background-color 0.5s box-shadow 0.5s;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.on {
    text-align: left;
    width: 80%;
}
.off {
    text-align: right;
    width: 80%;
}

.container div::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    background-color: ${props => props.color>700?'#fff':'#000'};;
    transition: 0.5s;
    top: 3px;
    left: 3px;
    border-radius: 50px;

}
   

`;

    export const ToggleLanjuageComponent = () => {

        const dispatch = useDispatch();

        const [toggle, setToggle] = useState(false);

        const {widthSize} = useSizeScreen();

        const handleClick = (event) => {
            setToggle(event.target.checked)
        }

        const handleLanguage = (param) => {
            if (param===true){
                dispatch(eng())
            } else{
                dispatch(spa())
            }
        }
        
    return (
        <ToggleContainer
            onClick={() => handleLanguage(toggle)}
            color={widthSize}
            initial={{
                y:-100,
            }}
            animate={{
                y:0,
                transition: {type:'spring',duration:1.5,delay:.8}
            }}
        >
                <label className='container'>
                    <input type='checkbox' onChange={handleClick}/>
                    <div>
                        {toggle ? <p className='on'>En</p> : <p className='off'>Sp</p> }
                    </div>
                </label>
        </ToggleContainer>
    )
    }
