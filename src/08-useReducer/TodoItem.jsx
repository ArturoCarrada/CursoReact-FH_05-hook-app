import React from 'react'

export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  return (
    <li key={todo.id}
        className='list-group-item d-flex justify-content-between  border-secondary '
        onDoubleClick={ () => onToggleTodo(todo.id) }
        >
            <span
              className = {`align-self-center h6
                ${todo.done ?
                  'text-decoration-line-through text-success' :
                  'text-primary'}
                `}
              // onClick={ () => onToggleTodo(todo.id) }
            >    
              {todo.description}
            </span>
            <button
              className='btn btn-danger'
              onClick={() => onDeleteTodo(todo.id)}
            >Borrar
            </button>
    </li>
  )
}
