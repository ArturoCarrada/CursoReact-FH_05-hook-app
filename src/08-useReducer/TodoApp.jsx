import React, { useEffect, useRef } from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodos } from '../Hooks/useTodos'

//const initialState = (lsTodos ? JSON.parse(lsTodos) : [])
//console.log(typeof localStorage.getItem('lsTodos'))
//console.log(typeof JSON.parse(localStorage.getItem('lsTodos')))
//console.log(typeof initialState)

//const lsTodos = localStorage.getItem('lsTodos')

// const initialState = lsTodos ? JSON.parse(lsTodos)
//     :[
//         {
//             id: new Date().getTime(),
//             description: 'Recolectar la piedra del alma',
//             done: false,
//         }, 
//     ]

// const initialState = [
//         // {
//         //     id: new Date().getTime(),
//         //     description: 'Recolectar la piedra del alma',
//         //     done: false,
//         // },
//     ]


//console.log(initialState)


export const TodoApp = () => {

    // useTodo
    // todos, handleNewTodo, handleDeleteTodo, handleToggleTodo
    // todosCount (todos.length), pendingTodosCount (todos.filter(todo => !todo.done).length) 
    const { todos, todosCount, pendingTodosCount,
        handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos()


  return (
    <>
        <h3>TodoApp: {todosCount()}, <small>pendientes: {pendingTodosCount()}</small> </h3>
        <hr />

        <div className='row'>
            <div className='col-7'>

                {/* TodoList */}
                <TodoList
                    todos = {todos}
                    onDeleteTodo = {handleDeleteTodo}
                    onToggleTodo = {handleToggleTodo}
                />
                {/* Fin TodoList */}

            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                
                {/* TodoAdd onNewTodo( todo )*/}
                {/* { id: new Date()..., description: '', done: false } */}
                <TodoAdd onNewTodo={handleNewTodo} />
                {/* Fin TodoAdd */}

                {/* <button 
                    className='btn btn-danger mt-1'
                    onClick={() => {
                        localStorage.clear()

                        const action = {
                            type: '[TODO] Clear All Todo',
                            payload: [],
                        }
                        
                        dispatch(action)
                    }}
                    >Limpiar Todo
                </button> */}
            </div>
            
        </div>

    </>
  )
}
