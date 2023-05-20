import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useParams, useNavigate } from 'react-router';
import GameLobby from './GameLobby';

export default function Game() {
  const gameState = useSelector((state: RootState) => state.gameState);
  const user = useSelector((state: RootState) => state.user);
  // console.log(user);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const navigate = useNavigate();

  const params = useParams();
  const gameId = params.id;

  useEffect(() => {
    const ws = new WebSocket(import.meta.env.VITE_WSS_URL);
    setSocket(ws);

    ws.onopen = (e) => {
      const userAndGameData = {
        room: gameId,
        user: user,
        method: 'join',
      };

      ws.send(JSON.stringify(userAndGameData));
    };

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      console.log(data);
      if (data.type === 'connection') {
      }
    };

    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        const userAndGameData = {
          room: gameId,
          user: user,
          method: 'leave',
        };

        ws.send(JSON.stringify(userAndGameData));
        ws.close();
      }
    };
  }, []);

  return (
    <main className="text-amber-300">
      {!gameState.inProgress ? <GameLobby /> : null}
    </main>
  );
}
