"use client";

import React from "react";

export const UserContext = React.createContext();

export default function UserProvider({ children }) {
    const [isLogueado, setIsLogueado] = React.useState(false);
    const [user, setUser] = React.useState({});

    React.useEffect(() => {
        if (localStorage.getItem("login")) {
            setIsLogueado(true);
            setUser(JSON.parse(localStorage.getItem("login")));
        }
    }, []);

    console.log(isLogueado, user);

    return (
        <UserContext.Provider value={{ isLogueado, user }}>
            {children}
        </UserContext.Provider>
    );
}