import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const {counter1, counter2, counter3} = state

    
  return (
    <>
        <h1>Counter 1: {counter1}</h1>
        <h1>Counter 2: {counter2}</h1>
        <h1>Counter 3: {counter3}</h1>
        <hr />
        <button
            className='btn'
            onClick={() =>
                setCounter({
                    ...state, // Mantén el resto del estado del objeto
                    counter1: counter1 + 1, // Actualiza solo counter1
                    counter2: counter2 + 2, // Actualiza solo counter2
                    counter3: counter3 + 3, // Actualiza solo counter3
                })
            }
        >+1</button>
    </>
  )
}
