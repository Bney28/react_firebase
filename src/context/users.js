import React, { createContext, useState } from "react";

export const usersContexts = createContext()

export const UsersProvider = ({children}) => {
    return(
        <>
        {children}
        </>
    )
}