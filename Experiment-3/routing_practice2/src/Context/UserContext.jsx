import { createContext } from "react";

export const UserContext=createContext();

export default function UserProvider({children}){
    const name="Baljinder Singh"
    return (

        <UserContext.Provider
        value={{name}}>{children}</UserContext.Provider>
    )
}
