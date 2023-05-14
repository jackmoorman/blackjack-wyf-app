import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="grow w-full flex flex-col pt-60 items-center text-slate-300">
      <h1 className="text-4xl animate-bounce">Blackjack With Your Friends!</h1>
      <Link
        to="/game"
        className="text-2xl mt-7 shadow shadow-gray-400 rounded-md py-2 px-4 hover:scale-105 transition-all"
      >
        Start a new game!
      </Link>
    </main>
  );
}
