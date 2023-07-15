import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import { useState } from 'react';

const App = () => {
  const [loginDetails, setLoginDetails] = useState({});

  return (
    <>
      <Navbar loginDetails={loginDetails} setLoginDetails={setLoginDetails} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login setLoginDetails={setLoginDetails} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
