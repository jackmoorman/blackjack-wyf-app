import React from 'react';
import { Link } from 'react-router-dom';

export default function Game() {
  return (
    <div className="grow text-amber-300 flex flex-col items-center p-10 gap-5">
      <Link to="/game/host" className="link">
        Host a new game
      </Link>
      <Link to="/game/join" className="link">
        Join a game
      </Link>
    </div>
  );
}
