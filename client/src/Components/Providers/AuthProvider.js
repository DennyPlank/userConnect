  import React, {useState} from 'react';
  import axios from 'axios';

  export const AuthContext = React.createContext()
  // export const AuthConsumer = AuthContext.Consumer

const AuthProvider = (props) => {
    const [ user, setUser ] = useState(null);
    const [users, setUsers ] = useState([])
    

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

  const getUsers = async () => {
    console.log("getUsers hit")
      let res = await axios.get('/users')
      console.log(res.data)
      // setUsers(res.data)
    }

  const handleLogin = async (user, navigate) => {
    try {
      let res = await axios.post('api/auth/sign_in', user)
      console.log("token:", res.headers['access-token'])
      setUser(res.data.data)
      navigate("/protected")
    } catch (err) {
      console.log(err.response)
      alert("error occured during login");
    }
  };
  
  const handleLogout = async (navigate) => {
    try {
      let res = await axios.delete("api/auth/sign_out");
      console.log(res.headers['access-token'] || "No Token" )
      navigate("/login");
      setUser(null);
      console.log("logout hit")

    } catch {
    console.log("Error logging out")
    }
  };

    return (
      <AuthContext.Provider value={{
        ...user, 
         authenticated: user !== null,
         handleRegister,
         handleLogin,
         handleLogout,
         getUsers,
         setUser
      }}>
        {props.children}
      </AuthContext.Provider>
    )
};


export default AuthProvider;
