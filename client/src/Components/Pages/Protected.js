import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const Protected = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <h1> PROTECTED </h1>
      <p>email: {auth.email}</p>
      {auth.authenticated && <p> is logged on </p>}
      {!auth.authenticated && <p> Error should not see this </p>}
      {JSON.stringify(auth)}
    </div>
  )
}

export default Protected;