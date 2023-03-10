import React, { useContext } from 'react'
import { firebase } from '../api'
import { auth } from '../context'


const Login = () => {

    const { user } = useContext(auth.authContext)

    const handleClick = async () => {
        firebase.login()
    }

    const handleLogout = () => {
        firebase.logout()
    }

    return (
        <>
            <div>Login</div>
            {
                user ? (
                    <>
                        <img src={user.photoURL} alt="profile-pic" />
                        <h1>{user.displayName}</h1>
                        <button className="btn btn-danger m-5" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <div>
                        <button className="btn btn-primary" onClick={handleClick}>Login</button>
                    </div>
                )
            }

        </>
    )
}

export default Login