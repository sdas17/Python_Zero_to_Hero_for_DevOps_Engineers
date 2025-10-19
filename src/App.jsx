import { useContext,  useState } from "react";
import Login from "./component/Auth/Login.jsx";
import Admin from "./component/Dahboard/Admin.jsx";
import Empd from "./component/Dahboard/Empd.jsx";
import {AuthContet} from "./context/AuthProvider.jsx";

function App() {
  
  const users_data=useContext(AuthContet)
 
   const [user,setuser]=useState(null)
   const [logged_user,setlogged_user]=useState(null)
   
   const loginfeature = (email, password) => {
  const isAdmin = users_data?.admin_data?.find(
    (admin) => admin.email === email && admin.password === password
  );

  if (isAdmin) {
    setuser("admin");
    setlogged_user(isAdmin); 
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "admin", email: isAdmin.email, name: isAdmin.name })
    );
    return;
  }

  const matchedEmployee = users_data?.employee_data?.find(
    (emp) => emp.email === email && emp.password === password
  );

  if (matchedEmployee) {
    setuser("user");
    setlogged_user(matchedEmployee);

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "user", email: matchedEmployee.email, name: matchedEmployee.name })
    );
  } else {
    alert("Invalid Credentials");
  }
};

  
  return (
   <>
    
    {!user && <Login loginfeature={loginfeature} />}
      {user === "admin" && <Admin  employeedata={logged_user}/>}
      {user === "user" && <Empd employeedata={logged_user} />}
 
   </>
  );
}

export default App;
