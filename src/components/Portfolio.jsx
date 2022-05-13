// styled components
import styled from 'styled-components';
//data
import {data} from '../data/data';
//hooks
import {useSizeScreen} from '../hooks/useSizeScreen';
//react router
import {Link} from 'react-router-dom';
//motion
import { motion } from 'framer-motion';
//redux
import { useSelector } from 'react-redux';
//Icons
import {MdKeyboardArrowLeft} from 'react-icons/md';
//styles
const BackgroundCardContainer = styled.div `
    width: 100vw;
    height: 100vh;
    background-color:#EFEBE9;
    display: flex;
    justify-content:center;
    align-items: center;
`;

const CardTextContainer = styled(motion.div)`
    padding: 1rem;
    margin-bottom:2rem;
`;


const SubTitle = styled.h3`
    font-size: calc(.8em + .2vw);
    font-family: ${props => props.theme.fontQuick};
`;

const Title = styled.h2`
    display: flex;
    justify-content:center;
    align-items:center;
    font-size: calc(1em + 1.5vw);
    font-family: ${props => props.theme.fontQuick};
    margin-bottom: 2rem;
`;

const Card = styled(motion.div)`
    cursor:pointer;
    display: flex;  
    flex-direction: column;
    padding: 1rem;
    margin:${props => props.wz>700?"4rem":"1rem"};
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 10px 10px 30px #BDBDBD;
    overflow: scroll;
    overflow-x: hidden;
    width:${props => props.wz>700?"50%":"90%"};
    height:${props => props.wz>700?"70%":"90%"};
    ::-webkit-scrollbar {
    display: none;
}
`;

const CardItemCointainer = styled.div`

        display:flex;
        align-items: center;
        height:10%;
        padding:1.5rem .9rem;
        width:100%;

    img{
        border-radius: 5px;
        width: ${props => props.wz>700?"15%":"30%"};
        height: auto;
        object-fit: contain;
    }

    .textContainer{
        padding-left: .5rem;
        width:70%;
        height: auto;
    }

`;


const Text = styled.div`

    font-size: calc(.8em + .1vw);
    font-family: ${props => props.theme.fontQuick};

    a{
        text-decoration: none;
        color: inherit;
    }
`;


export const Portfolio = () => {

    console.log(data)

    const {widthSize} = useSizeScreen();

    const {englishOn} = useSelector((state) => state.changing);
    
    return (
    <BackgroundCardContainer>
            <Card initial={{ y:1000 }} animate={{ y:0, transition: {type:'spring',duration:1.5,delay:1} }} wz={widthSize}>
            <Link to="/">
                <motion.div initial={{ y:-300 }}
                animate={{ y:0, transition: {type:'spring',duration:3,delay:2.5} }}>
                <MdKeyboardArrowLeft/>
                </motion.div>
            </Link>
                <CardTextContainer initial={{ x:-800 }}
                animate={{ x:0, transition: {type:'spring',duration:2,delay:2} }}>
                    <Title>{englishOn?"Sites":"Sitios"}</Title>
                    <Text>
                        lorem ipsum dolor sit amet, consectetur adipiscing el
                        lorem ipsum dolor sit amet, consectetur adipiscing el
                        lorem ipsum dolor sit amet, consectetur adipiscing el
                        lorem ipsum dolor sit amet, consectetur adipiscing el
                        lorem ipsum dolor sit amet, consectetur adipiscing el
                    </Text>
                </CardTextContainer>
                <motion.div initial={{ x:800 }}
                animate={{ x:0, transition: {type:'spring',duration:3,delay:2.5} }}>
                <CardItemCointainer wz={widthSize}>
                        <img src={data[0].img} alt=""/>
                            <div className="textContainer">
                                <SubTitle>
                                    {data[0].name}
                                </SubTitle>
                                <Text>
                                    <Link to="/redirectEcommerce" target="_blank">
                                        {data[0].tecnologies}
                                    </Link>
                                </Text>
                        </div>
                </CardItemCointainer>  
                <CardItemCointainer wz={widthSize}>
                        <img src={data[1].img} alt=""/>
                            <div className="textContainer">
                                <SubTitle>
                                    {data[1].name}
                                </SubTitle>
                                <Text>
                                    <Link to="/redirectAppWeather" target="_blank">
                                        {data[1].tecnologies}
                                    </Link>
                                </Text>
                        </div>
                </CardItemCointainer>  
                <CardItemCointainer wz={widthSize}>
                        <img src={data[2].img} alt=""/>
                            <div className="textContainer">
                                <SubTitle>
                                    {data[2].name}
                                </SubTitle>
                                <Text>
                                    <Link to="/redirectPinterest" target="_blank">
                                        {data[2].tecnologies}
                                    </Link>
                                </Text>
                        </div>
                </CardItemCointainer>  
                </motion.div>
            </Card>
    </BackgroundCardContainer>
    )
}

