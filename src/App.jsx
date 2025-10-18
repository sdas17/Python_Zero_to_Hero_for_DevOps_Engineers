import { useContext,  useState } from "react";
import Login from "./component/Auth/login";
import Admin from "./component/Dahboard/Admin";
import Empd from "./component/Dahboard/Empd";
import {AuthContet} from "./context/AuthProvider";

function App() {
  
  const users_data=useContext(AuthContet)
 
   const [user,setuser]=useState(null)
   const [logged_user,setlogged_user]=useState(null)
   
   const loginfeature = (email, password) => {
    // ✅ Check admin login
    const isAdmin = users_data?.admin_data?.find(
      (admin) => admin.email === email && admin.password === password
    );

    if (isAdmin) {
      setuser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return;
    }

    // ✅ Check employee login
    const matchedEmployee = users_data?.employee_data?.find(
      (emp) => emp.email === email && emp.password === password
    );

    if (matchedEmployee) {
      setuser("user");
      setlogged_user(matchedEmployee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "user", email: matchedEmployee.email })
      );
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
   <>
    
    {!user && <Login loginfeature={loginfeature} />}
      {user === "admin" && <Admin />}
      {user === "user" && <Empd employeedata={logged_user} />}
 
   </>
  );
}

export default App;
