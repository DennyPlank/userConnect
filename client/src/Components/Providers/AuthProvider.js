  import React, {useState} from 'react';
  import axios from 'axios';

  export const AuthContext = React.createContext()
  // export const AuthConsumer = AuthContext.Consumer

const AuthProvider = (props) => {
    const [ user, setUser ] = useState(null);

  const handleRegister = async (newUser, navigate) =>{
    try {
    let res = await axios.post('api/auth', newUser)
    setUser(newUser)
    console.log(res.data.data.id)
    navigate("/Protected")
    } catch (err) {
      console.log(err.response)
      alert("error occured during registration");
    }
  };

  const handleLogin = async (user, navigate) => {
    try {
      let res = await axios.post('api/auth/sign_in', user)
      setUser(user)
      console.log(res.data.data)
      navigate("/protected")
    } catch (err) {
      console.log(err.response)
      alert("error occured during login");
    }
  };
  
  const handleLogout = async (props) => {
    setUser(null)
    console.log("handleLogout")
  };

    return (
      <AuthContext.Provider value={{
        ...user, 
         authenticated: user !== null,
         handleRegister,
         handleLogin,
         handleLogout,
         setUser
      }}>
        {props.children}
      </AuthContext.Provider>
    )
};


export default AuthProvider;
