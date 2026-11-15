import React, { createContext, useState } from 'react'
const store = createContext();

export default function Context({ children }) {
    const [count, setCount] = useState(0);
    
    return (
        <store.Provider value={{count,setCount}}>
            {children}
        </store.Provider>
    )
}

export { store }
