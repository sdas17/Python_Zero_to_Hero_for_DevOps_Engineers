import { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../utils/localstorage"

export const  AuthContet =createContext()
const AuthProvider = ({children}) => {
    const [user_data,setuserdata]=useState('')
 
   useEffect (()=>{
      const {admin_data,employee_data}=getLocalStorage()
    setuserdata({admin_data,employee_data})
   },[])
  return (
    <div><AuthContet.Provider value={user_data}>
        {children}
        </AuthContet.Provider></div>
  )
}

export default AuthProvider