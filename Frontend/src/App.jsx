import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import UserLogin from './assets/pages/userLogin';
import UserSignup from './assets/pages/UserSignup';
import CaptainLogin from './assets/pages/CaptainLogin';
import CaptainSignup from './assets/pages/CaptainSignup';
import Start from './assets/pages/Start';
import UserProtectWrapper from './assets/pages/UserProtectWrapper';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App
