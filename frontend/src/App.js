import Home from './Components/Home';
import Login from './Components/login';
import Register from './Components/Register';
// import { BrowserRouter } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';

function App() {
  return (
    <div>
      {/* style={{marginTop: "-3.5rem"}} */}
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
