import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'


export const LoginPage = () => {

	const { user, setUser } = useContext(UserContext)
	console.log(user, setUser)

	return (
		<>
			<h3>LoginPage</h3>
			<hr />
			<pre>
				{JSON.stringify(user, null, 3)}
			</pre>

			<button
				className='btn btn-primary'
				onClick={ () => setUser({id: 123, name: 'Daniel', email: 'daniel@gmail.com'}) }
			>
				SetUser
			</button>
		</>
	)
}
