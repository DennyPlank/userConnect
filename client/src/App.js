import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Pages/Home';
import Protected from './Components/Pages/Protected';
import Public from './Components/Pages/Public';
import Navbar from './Components/Navbar';
import Layout from './Components/Pages/Layout';
import RequireAuth from './Components/RequireAuth';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';


function App() {
  return ( 
    <>
      {/* <Navbar /> */}
      <div>
        <Routes>
          {/* Public Routes */}
          <Route element={<Layout />}>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Home />} />
          <Route path="/public" element={<Public />} />
          <Route path="/SignUp" element={<Register />} />
          {/* Protected Routes */}
          <Route element={<RequireAuth/>}>
          <Route path="/protected" element={<Protected />} />
          </Route>
          </Route>
        </Routes>
      </div>
      </>
  );
}

// const styles = {
//   navbar: {
//     display: "flex",
//     border: "solid",
//     justfiyContent: "center"
//   },
//   appContainer: {
//     display: "flex",
//     justfiyContent: "center"
//   }
// }

export default App;
