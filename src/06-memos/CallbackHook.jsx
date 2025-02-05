import React, {useState, useCallback, useEffect} from 'react'
import { ShowIncrement } from './showIncrement'



export const CallbackHook = () => {
  
    const [counter, setCounter] = useState(10)
  
    const incrementFather = useCallback(
        (value) => {
            //console.log('setCounter(counter + 1)')
            setCounter( (c) => c + value)
        }, []
    )


    useEffect( () => {
        //incrementFather()
    }, [incrementFather] )


    // const incrementFather = () => {
    //     setCounter(counter + 1)
    // }



    return (
    <>
        <h3>useCallback Hook: {counter}</h3>
        <hr />
    
        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
 