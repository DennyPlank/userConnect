import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Login from './Login';

const Home = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <h1> HOME </h1>
      {JSON.stringify(auth)}
      <p onClick={auth.handleLogin}>Login</p>
      <p onClick={auth.handleLogout}>Logout</p>
      <Link to="/Protected"> Protected </Link>
      {/* <Login logMeIn={logMeIn}/> */}
    </div>
  )
}

export default Home;