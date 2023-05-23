import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { useParams, useNavigate } from 'react-router';
import GameLobby from './GameLobby';
import { setGame } from '../features/gameSlice';
import joinGame from '../utils/joinGame';
import leaveGame from '../utils/leaveGame';
import Sidebar from '../components/Sidebar';

export default function Game() {
  const gameState = useSelector((state: RootState) => state.gameState);
  const user = useSelector((state: RootState) => state.user);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const navigate = useNavigate();

  const params = useParams();
  const gameId = params.id;

  const dispatch = useDispatch();

  // terminates WS connection when the window is closed.
  window.addEventListener('beforeunload', (e: BeforeUnloadEvent) => {
    e.preventDefault();
    leaveGame(socket, gameId!, user, 'leave');
  });

  useEffect(() => {
    const ws = new WebSocket(import.meta.env.VITE_WSS_URL);
    setSocket(ws);

    ws.onopen = (e: Event) => joinGame(ws, gameId!, user, 'join');

    ws.onmessage = (e: MessageEvent) => {
      const data = JSON.parse(e.data);
      // console.log(data);
      if (data.type === 'connection') {
        const { message, gameData } = data;
        const { inProgress } = gameData;
        let host = '';
        let users = [];
        for (let i = 0; i < gameData.users.length; i++) {
          if (gameData.users[i].isHost) {
            host = gameData.users[i].name;
          }
          users.push({
            username: gameData.users[i].name,
            chips: gameData.users[i].chips,
          });
        }
        console.log('users: ', users);
        dispatch(setGame({ host, inProgress, users }));
      }
    };

    // terminates the WS connection when the component unmounts (if the user navigates to a new page).
    return () => leaveGame(ws, gameId!, user, 'leave');
  }, []);

  return (
    <main className="text-amber-300 grow h-full flex">
      <Sidebar />
      {!gameState.inProgress ? <GameLobby /> : null}
    </main>
  );
}
