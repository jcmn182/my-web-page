import {useEffect,useState} from 'react';

export const useDelay = (addDelay) =>{

    const [Delay, setDelay] = useState(false)

    useEffect(()=>{

        setTimeout(() => { setDelay(true) }, addDelay)
        
    },[])
    
    return {Delay}
}