import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { users } from './context'


const App = () => {
    return (
        <>
            <users.UsersProvider>
                <RouterProvider router={router} />
            </users.UsersProvider>
        </>
    )
}

export default App