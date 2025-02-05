import React, { useState, useEffect } from 'react'
//import { useState } from 'react'
import { Message } from './Message'
import { useForm } from '../Hooks/useForm'

export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password, onResetForm} = useForm ({
        username: '',
        email: '',
        password: '',
    })

    //const {username, email, password} = formState //Se puede omitir aqui, ya que se manda ...formState desde Custom Hook

/*     const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    })

    const {username, email, password} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    } */

    
  return (
    <>
        <h3>Formulario con Custom Hook</h3>
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
        
        <input
            type="password"
            className='form-control mt-2'
            placeholder='Contraseña'
            name='password'
            value={password}
            onChange={onInputChange} 
        />

        
        <button onClick={onResetForm} className='btn btn-primary mt-3' >Borrar</button>
        
    </>
  )
}
