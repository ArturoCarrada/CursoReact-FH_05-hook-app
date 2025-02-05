import React from 'react'
import { useForm } from '../Hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {
 
    const {description, otro, onInputChange, onResetForm} = useForm({
        description: '',
        //otro: '', //Prueba
    })
 
    const onFormSubmit = (event) => {
        event.preventDefault()
        if(description.length <= 1) return

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
            //otro: otro    //prueba
        }

        onNewTodo(newTodo)
        onResetForm()

    }
 
    return (
    <>
    <form onSubmit={onFormSubmit}> 
        <input            
            type="text"
            placeholder='¿Qué hay que hacer?'
            className='form-control border-secondary'
            name='description'
            value={description}
            onChange={onInputChange}
        />

        {/* <input            
            type="text"
            placeholder='¿Qué hay que hacer?'
            className='form-control border-secondary'
            name='otro'
            value={otro}
            onChange={onInputChange}
        /> */}

        <button
            type='submit'
            className='btn btn-primary mt-1'
        >
            Agregar
        </button>


    </form>
    </>
  )
}
