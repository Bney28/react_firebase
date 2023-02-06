import React from 'react'
import { Home, Users, Login } from "./pages"
import { Navbar } from './layout'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Navbar />}>

                <Route path="/" element={<Home />} />
                <Route path="/users/*" element={<Users />} />
                <Route path="/users/:id/*" element={<Users />} />
                <Route path="/login" element={<Login />} />

                
            </Route>
        </>
    )
)