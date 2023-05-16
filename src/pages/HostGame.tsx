import React from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

export default function HostGame() {
  return (
    <div className="text-amber-300 flex flex-col items-center pt-12 gap-6">
      <h1 className="text-2xl">Select a game:</h1>
      <Link to={`/lobby/blackjack/${uuid()}`} className="link">
        Blackjack
      </Link>
      <Link to={`/lobby/war/${uuid()}`} className="link">
        War
      </Link>
    </div>
  );
}
