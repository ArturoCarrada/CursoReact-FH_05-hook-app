import React, {useContext} from 'react'
import { UserContext } from './context/UserContext'

export const HomePage = () => {
   const {hola, user} = useContext(UserContext)
  
    return (
      <>
          <h3>HomePage {user?.name}</h3>
          <hr />
        <pre>
          {JSON.stringify(user, null, 3)}
        </pre>

        <button>
          Establecer Usuario
        </button>
    </>
  )
}
