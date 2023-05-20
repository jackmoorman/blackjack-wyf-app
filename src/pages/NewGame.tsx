import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export default function NewGame() {
  return (
    <div className="grow flex flex-col items-center text-amber-300">
      <h1 className="text-2xl m-12 animate-bounce">Choose one below:</h1>
      <Link to={`/game/${uuid()}`} className="link">
        Host New Game
      </Link>
      <Link to="/game/join" className="link m-6">
        Join a Friend's Game
      </Link>
    </div>
  );
}
