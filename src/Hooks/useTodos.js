import React, {useReducer, useEffect} from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'


export const useTodos = (initialState = []) => {
 
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }
    
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)
    useEffect(() => {
        //console.log('EFFECT')
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    // todosCount (todos.length), pendingTodosCount (todos.filter(todo => !todo.done).length) 

    const todosCount = (todo) => {
        return todos.length
    }

    const pendingTodosCount = (todo) => {
        return todos.filter(todo => !todo.done).length
    }

        const handleNewTodo = (todo) => {
            //console.log({todo})
            const action = {
                type: '[TODO] Add Todo',
                payload: todo,
            }
            dispatch(action)            
        }
    
        const handleDeleteTodo = (id) => {
            dispatch({
                type: '[TODO] Remove Todo',
                payload: id,
            })
        }
    
        const handleToggleTodo = (id) => {
            // console.log(id)
            dispatch({
                type: '[TODO] Toggle Todo',
                payload: id,
            })
        }
    
    
        return {
            todos,
            todosCount,//: todos.length,
            pendingTodosCount,//: todos.filter(todo => !todo.done).length,
            handleNewTodo,
            handleDeleteTodo,
            handleToggleTodo,
        }

}
