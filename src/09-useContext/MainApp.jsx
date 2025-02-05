import { Navigate, Route, Routes, Link } from 'react-router'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import {Navbar} from './Navbar'
import {UserProvider} from './context/UserProvider'

export const MainApp = () => {
  return (
    <UserProvider>

        {/* <h3>MainApp</h3> */}
        <Navbar/>
        <hr />

        <Routes>
            <Route path = "/" element = { <HomePage /> } />
            <Route path = "about" element = { <AboutPage /> } />
            <Route path = "login" element = { <LoginPage /> } />

            {/* <Route path = "/*" element = { <LoginPage /> }/> */}
            <Route path = "/*" element = { <Navigate to="/about" /> } />

        </Routes>
    </UserProvider>
  )
}
