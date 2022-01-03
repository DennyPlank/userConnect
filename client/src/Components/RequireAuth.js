import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "./Providers/AuthProvider"

const RequireAuth = () => {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const auth = useContext(AuthContext);
  useEffect(()=>{
    checkAuth();
  }, []);

  const checkAuth = async () => {
    if (auth.authenticated || !localStorage.getItem('access-token')){
      setCheckingAuth(false);
    }
    try {
      const res = await axios.get("/api/auth/validate_token") 
      console.log("Reloading Token")
      auth.setUser(res.data.data);
    } catch (err) {
      console.log("unable to validate token")
    } finally {
      setCheckingAuth(false);
    }
  }
  if(checkingAuth){
    return <p> Checking if logged in or not</p>
  }
  if(!auth.authenticated){
    return <Navigate to="/login" />
  }

    return (
      <div>
        {/* <h1> Welcome {auth.email}</h1> */}
        <Outlet />
      </div>
    )
}

export default RequireAuth;