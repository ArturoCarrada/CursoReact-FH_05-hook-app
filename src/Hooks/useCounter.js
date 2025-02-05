import { useState } from "react"

export const useCounter = (initialValue = 1) => {

    const [counter, setCounter] = useState(initialValue)

    
    const increment = (initialValue = 1) => {
        setCounter(counter + initialValue)
    }
    
    const decrement = (initialValue = 1) => {
        setCounter(counter - initialValue)
    }
    
    const reset = () => {
        //const vacio = {}
        setCounter(initialValue)
    }

    
    return {
        counter,
        increment,
        decrement,
        reset,
    }
}


