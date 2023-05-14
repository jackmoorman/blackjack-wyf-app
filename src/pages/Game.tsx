import React from 'react';
import { Link } from 'react-router-dom';

export default function Game() {
  return (
    <div className="grow text-amber-300">
      <h1>Select a game:</h1>
      <Link to="/game/host">Host a new game</Link>
    </div>
  );
}
