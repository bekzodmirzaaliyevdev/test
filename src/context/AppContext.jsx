import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    const states = { cart, setCart }
    return (
        <AppContext.Provider value={states}>{children}</AppContext.Provider>
    )
}

export const useApp = () => {
    const ctx = useContext(AppContext)

    if (!ctx) {
        throw new Error('useApp must be used within AppProvider')
    }

    return ctx
} 
