import React, { useState } from 'react'
import { firebase } from '../api'

const Login = () => {

    const [user, setUser] = useState()

    const handleClick = async () => {
        const _user = await firebase.login()
        console.log(_user)
        setUser(_user)

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