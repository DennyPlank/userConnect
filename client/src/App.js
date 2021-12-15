import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Pages/Home';
import Protected from './Components/Pages/Protected';
import Public from './Components/Pages/Public';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/protected" element={<Protected />} />
      <Route path="/public" element={<Public />} />
    </Routes>
  );
}

export default App;
