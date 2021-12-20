import React from 'react';


const Login = (props) => {
  const {logMeIn} = props
  // console.log(logMeIn);
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("logMeIn")
    return logMeIn;
  }
  return(
    <div>
       <h1> Welcome! Sign in below... </h1>
       <form onSubmit={handleSubmit}>
         <p>Sign in:</p>
         <input 
         placeholder='Email'
         ></input>
         <input 
         placeholder='Password'
         ></input>
         <button>Submit</button>
       </form>
    </div>
  )
}
export default Login;