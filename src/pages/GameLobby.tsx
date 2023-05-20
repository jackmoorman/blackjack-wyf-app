import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useParams } from 'react-router';
import { socket } from '../socket/socket';

export default function HostGame() {
  const user = useSelector((state: RootState) => state.user);
  const { id } = useParams();

  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
  }, []);

  return (
    <div className="text-amber-300 flex flex-col items-center text-lg">
      <h1 className="text-2xl">{user.username}'s Lobby</h1>
      <p className="mt-12">Share this passcode with your friends:</p>
      <p className="shadow shadow-amber-300 px-6 py-3 m-5 rounded-md">{id}</p>
    </div>
  );
}
