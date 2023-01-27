import React, { createContext, useState } from "react";
import { users as usersApi } from '../api'

export const usersContext = createContext()
export const usersDispatcherContext = createContext()

export const UsersProvider = ({ children }) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () => {
        try {
            setData(null)
            setIsLoading(true)
            const res = await usersApi.getUsers()
            setIsLoading(false)
            setData(res.data)
        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }

    const deleteUser = async (userId) => {
        try {
            setIsLoading(true)
            await usersApi.deleteUser(userId)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }

    const state = { data, error, isLoading }
    const dispatchers = { getData, deleteUser, sendUser }

    return (
        <>
            <usersDispatcherContext.Provider value={dispatchers}>
                <usersContext.Provider value={state}>
                    {children}
                </usersContext.Provider>
            </usersDispatcherContext.Provider>
        </>
    )
}