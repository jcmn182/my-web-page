import { useEffect } from 'react'

export const Redirect = ({url}) => {

    useEffect(() => {
        window.location.href = url;
     }, [url]);
     
  return (
    <div>Redirect</div>
  )
}
