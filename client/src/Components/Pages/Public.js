import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../Providers/AuthProvider';

const Public = () => {
  const auth = useContext(AuthContext);
  // console.log(auth.getUsers())
  return (
    <div>
      <h1> PUBLIC </h1>
      <h1> This is a public page. Anybody can see this page, whether they are logged in or not </h1>
      <p> try putting an index of users here (This didnt work)</p>
    </div>
  )
}

export default Public;