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
import EditUser from './Components/Pages/EditUser';


function App() {
  return ( 
    <>
      {/* <Navbar /> */}
      <div>
        <Routes>
          {/* Public Routes */}
          <Route element={<Layout />}>
          <Route path="/login" element={<Login />}/>
          <Route path="/public" element={<Public />} />
          <Route path="/register" element={<Register />} />
          {/* Having this here means that the user token is destroyed when you reload on any page not wrapped in AUTH */}
          {/* Protected Routes */}
          <Route element={<RequireAuth/>}>
          <Route path="/" element={<Home />} />
          <Route path="/protected" element={<Protected />} />
          <Route path="/edit" element={<EditUser />} />
          </Route>
          </Route>
        </Routes>
      </div>
      </>
  );
}

export default App;
