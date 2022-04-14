import { useState, useEffect } from 'react';

export const useSizeScreen = () => {
    const [sizeScreen,sertSizeScreen] = useState({
        widthSize: window.innerWidth,
        heightSize: window.innerHeight
      });

      const setSize = () => {
        sertSizeScreen({
            widthSize: window.innerWidth,
            heightSize: window.innerHeight
        })
      }

      useEffect(() => {
        window.addEventListener('resize', setSize);
        
        return(() => {
            window.removeEventListener('resize', setSize);
        })
      }, [sizeScreen])

      const {widthSize,heightSize} = sizeScreen

      return{widthSize,heightSize}
}
