import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ChangePassword from './components/ChangePassword';
import Login from './components/Login';
import Verify from './components/Verify';
import ConfirmCode from './components/ConfirmCode';
import Done from './components/Done';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/login-verification" element={<ConfirmCode />} />
        <Route path="/verification-complete" element={<Done />} />
      </Routes>
    </main>
  );
};

export default App;
