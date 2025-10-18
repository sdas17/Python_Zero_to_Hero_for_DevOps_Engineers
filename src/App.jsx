import { useEffect, useState } from "react";
import Login from "./component/Auth/login";
import Admin from "./component/Dahboard/Admin";
import Empd from "./component/Dahboard/Empd";

function App() {

   const [user,setuser]=useState(null)
   const loginfeature= ((email,password)=>{
    if (email ==='admin@example.com' && password ==='123') {
      // console.log("this is Admin")
      setuser('admin')
    }else if (email =='user@name.com' && password =='123') {
            // console.log("this is user")
                  setuser('user')


    }else{
      alert("Invalid Credentials")
    }
   })
  return (
   <>
    
    {!user ?<Login loginfeature={loginfeature}/>:""}
    {user == 'admin' ? <Admin/>: <Empd/>}
   {/* <Empd/>  */}
   {/* <Admin/> */}
   </>
  );
}

export default App;
