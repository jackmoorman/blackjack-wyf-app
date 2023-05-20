import React from 'react';
import { Route, Routes } from 'react-router';
import RootLayout from './layouts/RootLayout';
import LogoutLayout from './layouts/LogoutLayout';
import GameLayout from './layouts/GameLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import LogoutSuccess from './pages/LogoutSuccess';
import LogoutFailure from './pages/LogoutFailure';
import NewGame from './pages/NewGame';
import GameLobby from './pages/GameLobby';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/game" element={<GameLayout />}>
          <Route path="/game/new" element={<NewGame />} />
          <Route path="/game/lobby/:id" element={<GameLobby />} />
          <Route path="/game/in-progress/:id" element={<GameLobby />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="/logout" element={<LogoutLayout />}>
        <Route path="/logout/success" element={<LogoutSuccess />} />
        <Route path="/logout/failure" element={<LogoutFailure />} />
      </Route>
    </Routes>
  );
}
