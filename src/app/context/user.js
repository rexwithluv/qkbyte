"use client";

import { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [isLogueado, setIsLogueado] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        if (sessionStorage.getItem("login")) {
            setIsLogueado(true);
            setUser(JSON.parse(sessionStorage.getItem("login")));
        }
    }, []);

    return (
        <UserContext.Provider value={{ isLogueado, user }}>
            {children}
        </UserContext.Provider>
    );
}