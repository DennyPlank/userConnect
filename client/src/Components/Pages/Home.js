import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Home = () => {
  const auth = useContext(AuthContext);
  // const logMeIn = auth.handleLogin;
  // const logMeOut = auth.handleLogout;
  return (
    <div>
      <h1> HOME </h1>
      {auth.email ? (`${(auth.email)} is logged in`) : "sign up or log in"}
    </div>
  )
}

export default Home;