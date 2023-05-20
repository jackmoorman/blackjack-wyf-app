import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import GameLobby from './GameLobby';

export default function Game() {
  const gameState = useSelector((state: RootState) => state.gameState);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(import.meta.env.VITE);
  }, []);

  return (
    <main className="text-amber-300">
      {!gameState.inProgress ? <GameLobby /> : null}
    </main>
  );
}
