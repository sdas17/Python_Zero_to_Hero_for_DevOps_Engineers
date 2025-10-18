import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/localstorage"
export const  AuthContet =createContext()
const AuthProvider = ({children}) => {
    const [user_data,setuserdata]=useState('')
    
 
   useEffect(() => {
    // 👇 Optional: Only set if nothing exists
    if (!localStorage.getItem("employee") || !localStorage.getItem("admin")) {
      setLocalStorage();
    }

    const { admin_data, employee_data } = getLocalStorage();
    console.log("Fetched from localStorage:", admin_data, employee_data);
    setuserdata({ admin_data, employee_data });
  }, []);

  return (
    <div><AuthContet.Provider value={user_data}>
        {children}
        </AuthContet.Provider></div>
  )
}

export default AuthProvider