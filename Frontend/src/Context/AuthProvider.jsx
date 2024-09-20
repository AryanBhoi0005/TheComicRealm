import React, { createContext, useContext, useState } from 'react'

    //First we have to create context 
export  const AuthContext=createContext()

    //Children includes other components such as Navbar, Banner so to use contextAPI we pass children in it so we can use contextAPI in it 
export default function AuthProvider({children}){
    //Name stored in the local Storage
const initialAuthUser=localStorage.getItem("Users");       //Getting data from LocalStorage
    //Checking if User is logged in or logged out
const [authUser,setAuthUser]=useState(
    initialAuthUser?JSON.parse(initialAuthUser):undefined
)
return(
<AuthContext.Provider value={[authUser,setAuthUser]}>
    {children}
</AuthContext.Provider>
)
}
export const useAuth=()=>useContext(AuthContext); 
