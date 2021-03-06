import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">       
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    INICIO
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink 
                            activeclassname="active"
                            className="nav-item nav-link" 
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink 
                            activeclassname="active"
                            className="nav-item nav-link" 
                            to="/dc"
                        >
                            DC
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <NavLink 
                            activeclassname="active"
                            className="nav-item nav-link" 
                            to="/login"
                        >
                            Logout
                        </NavLink>
                    </ul>
                </div>

                
            </nav>
            <section>
                <Outlet />
            </section>
        </>
    )
}