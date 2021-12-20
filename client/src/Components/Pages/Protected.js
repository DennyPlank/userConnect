import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import EditUser from './EditUser';


const Protected = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <h1> Profile </h1>
      <h2>User Profile here</h2>
      <EditUser />
      <div>
      <button onClick={auth.handleLogout}>Logout</button>
      </div>
      {!auth.authenticated && <p> Error should not see this </p>}
    </div>
  )
}

export default Protected;