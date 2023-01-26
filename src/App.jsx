import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { users } from './context'


const App = () => {
    return (
        <>
            <users.UserProvider>
                <RouterProvider router={router} />
            </users.UserProvider>
        </>
    )
}

export default App