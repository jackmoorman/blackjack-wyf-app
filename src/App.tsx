import React from 'react';
import { Route, Routes } from 'react-router';
import RootLayout from './layouts/RootLayout';
import LogoutLayout from './layouts/LogoutLayout';
import GameRootLayout from './layouts/GameRootLayout';
import Game from './pages/Game';
import Home from './pages/Home';
import Login from './pages/Login';
import LogoutSuccess from './pages/LogoutSuccess';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/game" element={<GameRootLayout />}>
          <Route index element={<Game />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="/logout" element={<LogoutLayout />}>
        <Route path="/logout/success" element={<LogoutSuccess />} />
      </Route>
    </Routes>
  );
}
