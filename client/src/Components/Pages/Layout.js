import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom"
import { AuthContext } from "../Providers/AuthProvider";

const Layout = () => {
  const auth = useContext(AuthContext);
  const renderAuthLinks = () => {
    if (auth.authenticated) {
      console.log("logged in and ", auth)
      return (
        <div style={styles.navbar}>
            <div>
              <Link to="/Protected">Profile</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
          </div>
          <div>
              <Link to="/Public">Public</Link>
          </div>
        </div>
      )
    } else {
      console.log( "not logged in and ")
      return (
        <div>
          {/* <div>
                <Link to="/">Home</Link>
          </div> */}
          <div>
              <Link to="/Public">Public</Link>
          </div>
          <div>
            <Link to="/register">Register</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </div>
      )
    }; 
  };
  return (
    <div>
      <div>
          {renderAuthLinks()}
      </div>
      <div style={styles.pageContainer}>
      <Outlet />
      </div>
    </div>
  )
};

export default Layout;

const styles = {
  navbar: {
    display: "flex",
    border: "solid",
    padding: "1%",
    justfiyContent: "center"
  },
  pageContainer: {
    display: "flex",
    maxWidth: '70vw',
    margin:'auto',
    border: '1px solid red',
    padding: "5%",
    margin: '5%'
  }
}
