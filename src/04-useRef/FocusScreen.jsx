
import { useRef } from "react"


export const FocusScreen = () => {
  
    //const inputRef = useRef()
    //console.log(inputRef)
    let inputRef = ''

  const onclick = () => {
    //document.querySelector('input').select() //focus()
    console.log(inputRef)
    
    //inputRef.current.select()
  }
  
  
    return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input
            ref={(element)=>inputRef = element}
            type="text"
            placeholder='Ingrese su nombre'
            className='form-control'
        />

        <button
            className='btn btn-primary mt-2'
            onClick={onclick}
        >
            Set focus
        </button>
    </>
  )
}







