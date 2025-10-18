import { useContext,  useState } from "react";
import Login from "./component/Auth/login";
import Admin from "./component/Dahboard/Admin";
import Empd from "./component/Dahboard/Empd";
import {AuthContet} from "./context/AuthProvider";

function App() {
  
  const users_data=useContext(AuthContet)
 
   const [user,setuser]=useState(null)
   const [logged_user,setlogged_user]=useState(null)
   const loginfeature= ((email,password)=>{
    if (users_data&&users_data.admin_data.find((e)=>e.email ==email && e.password ==password)) {
      setuser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
    }else if (users_data) {
      const user_role_data =users_data.employee_data.find((e)=>e.email ==email && e.password ==password)
            setuser('user')
              localStorage.setItem('loggedInUser',JSON.stringify({role:"user"}))
              setlogged_user(user_role_data)

    }else{
      alert("Invalid Credentials")
    }
   })
  return (
   <>
    
    {!user ? <Login loginfeature={loginfeature}/> : null}
    {user === 'admin' ? <Admin/> : user === 'user' ? <Empd employeedata={logged_user}/> : null}
 
   </>
  );
}

export default App;
