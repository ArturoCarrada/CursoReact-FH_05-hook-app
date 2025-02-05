import React, {useEffect} from 'react'
import { useFetch } from '../Hooks/useFetch'
import { useCounter } from '../Hooks/useCounter'
import { LoadingMessage } from './LoadingMessage'
import { PokemonCard } from './PokemonCard'


export const MultipleCustomHooks = () => {
  
    const  {counter, increment, decrement, reset} = useCounter(1)
    //console.log(counter)
    const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    
    //console.log(data)
    //data.id, data.name, data.sprites.back_default
    
    return (
    <>
        <h3 className='bg-info rounded text-center text-light'>Información</h3>
        <hr />

        {/* {isLoading && <h1> Cargandoo...</h1>} */}
        {isLoading
        ?<LoadingMessage/>
        :(
            <PokemonCard
                id = {data.id}
                name = {data.name}
                sprites = {[
                    data.sprites.front_default,
                    data.sprites.front_shiny,
                    data.sprites.back_default,
                    data.sprites.back_shiny
                ]}
            />
        )
        }
        
        {/* <pre>{ JSON.stringify(data, null, 2) }</pre> */}
        {/* <h3>{data?.name}</h3> */}   {/*Se pone ? para que no de error por "null" inicialmente*/}

        <button
            className='btn btn-primary mt-2'
            onClick={() => counter > 1 ? decrement() : null}>
            Anterior
        </button>
        <button
            className='btn btn-primary mt-2'
            onClick={() => increment(1)}>
            Siguiente
        </button>

    </>
  )
}
