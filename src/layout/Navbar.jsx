import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-light">
                <div className="container-fluid">
                    
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/users" className="nav-link">
                                    Users
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container p-2">
                <Outlet />
            </div>
        </>
    )
}

export default Navbar