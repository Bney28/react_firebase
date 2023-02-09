import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { auth } from './context'

const PrivateRoute = () => {

    const { user } = useContext(auth.authContext)
    console.log(user, "privateRoute")

    return (
        <>

            {
                user ? (
                    <Outlet />
                ) : (
                    <>
                        <Navigate to="/login" />
                        {console.log("No estás logueado")}
                    </>
                )
            }

        </>
    )
}

export default PrivateRoute