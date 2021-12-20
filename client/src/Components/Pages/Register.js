import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import AuthProvider, { AuthContext } from '../Providers/AuthProvider'


const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("test@test.com")
  const [password, setPassword] = useState("123456")
  const [passwordConfirmation, setPasswordConfirmation] = useState("123456")
  const auth = useContext(AuthContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== passwordConfirmation){
    // let user know
    alert("passwords don't match")
    return;
    } 

    auth.handleRegister({email, password}, navigate);
  }
  return (
    <div>
      <h1> Sign Up Here: </h1>
        <form onSubmit={handleSubmit}>
          <p> Email </p>
          <input value={email} 
          onChange={(e)=>setEmail(e.target.value)}></input>
          <p> Password</p>
          <input value={password}
          onChange={(e)=> setPassword(e.target.value)}></input>
          <p> Confirm Password </p>
          <input value={passwordConfirmation}
          onChange={(e)=> setPasswordConfirmation(e.target.value)}></input>
          <button>Submit</button>
        </form> 
      </div>
  )
}

export default Register;