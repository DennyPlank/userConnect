import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <div style={styles.navbar}>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/Public">Public</Link>
          </div>
          <div>
            <Link to="/Protected">Protected</Link>
          </div>
          <div>
            <Link to="/Login">Login</Link>
          </div>
        
          <div> 
            <Link to="/SignUp"> Sign up here </Link>
          </div>
      </div>
      <div style={styles.pageContainer}>
      <Outlet />
      </div>
    </div>
  )
};

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
export default Layout;