import { Link, NavLink } from 'react-router'

export const Navbar = () => {
  return (
    <>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className='container-fluid'>
                <Link className="navbar-brand" to="/">useContext</Link>

                {/* <div className="collapse navbar-collapse col-12" id="navbarNav"> */}
                <div className="collapse navbar-collapse col-12" id="navbarNav">
                    {/* <ul className="navbar-nav"> */}
                    <ul className="d-flex flex-row navbar-nav">
                        <NavLink
                            className={ ( {isActive} )  => `nav-link ${ isActive ? 'active' : '' }`}
                            to="/" >
                            Home
                        </NavLink>
                        <NavLink
                            className={ ( {isActive} )  => `nav-link ${ isActive ? 'active' : '' }`}
                            to="/about" >
                            About
                        </NavLink>
                        <NavLink
                            className={ ( {isActive} )  => `nav-link ${ isActive ? 'active' : '' }`}
                            to="/login" >
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}





