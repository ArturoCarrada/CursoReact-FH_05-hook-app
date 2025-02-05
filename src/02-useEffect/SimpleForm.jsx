import React, { useState, useEffect } from 'react'
//import { useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'prueba@google.com'
    })

    const {username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect( () => {
        //console.log('Called')
    }, [])  //[Vacio], solo se ejecutará una vez
            //Si se pone sin [], se ejecutará siempre que algo cambie

    useEffect( () => {
        //console.log('formState changed')
    }, [formState]) //Cuando cambie todo es estado de formState

    useEffect( () => {
        //console.log('email changed')
    }, [email]) //Cuando cambie el estado de email


    


  return (
    <>
        <h3>Formulario Simple</h3>
        <hr />

        <input
            type="text"
            className='form-control'
            placeholder='Username'
            name='username'
            value={username}
            onChange={onInputChange} 
        />


        <input
            type="email"
            className='form-control mt-2'
            placeholder='prueba@google.com'
            name='email'
            value={email}
            onChange={onInputChange} 
        />

        {
            username === 'strider2' && <Message /> //? <Message /> : <h4>No Existe</h4>
        }
        
    </>
  )
}
