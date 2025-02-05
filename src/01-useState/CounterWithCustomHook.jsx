import React from 'react'
import { useCounter } from '../Hooks/useCounter'

export const CounterWithCustomHook = () => {

    const {counter, increment, reset, decrement} = useCounter(1)

  return (
    <>
        <h3>Counter with Hook: {counter}</h3>
        <hr />

        <button className='btn btn-primary'
            onClick={() => increment(1)}>
        +1</button>
        
        <button className='btn btn-primary'
            onClick={() => reset()}>
        Reset</button>
        
        <button className='btn btn-primary'
            onClick={() => decrement(1)}>
        -1</button>

    </>
  )
}
