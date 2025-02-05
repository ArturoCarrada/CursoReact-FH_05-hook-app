
import { useEffect, useState } from "react"


export const Message = () => {
  
    const [coords, setCoords] = useState({x:0, y:0})

  useEffect(() => {
    //console.log('Message Mounted')
    const onMouseMove = ({x, y}) => {
        const coords = {x, y}
        console.log(coords)
        
        setCoords({
            //coords
            x, y
        })
    }   
    window.addEventListener('mousemove', onMouseMove)

    return () => {
        //console.log('Message UnMounted')
        window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])
  
  
  
    return (
    <>
        <h4>Usuario ya existe</h4>
        <h5>{JSON.stringify(coords)}</h5>
    </>
  )
}
