import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider'


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("test@test.com")
  const [password, setPassword] = useState("123456")
  const auth = useContext(AuthContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    auth.handleLogin({email, password}, navigate);
    return;
  } 

  return (
    <div>
      <h1> Login Here: </h1>
        <form onSubmit={handleSubmit}>
          <p> Email </p>
          <input value={email} 
          onChange={(e)=>setEmail(e.target.value)}></input>
          <p> Password</p>
          <input value={password}
          onChange={(e)=> setPassword(e.target.value)}></input>
          <button>Submit</button>
        </form> 
      </div>
  )
}

export default Login;