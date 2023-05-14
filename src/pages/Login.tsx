import React from 'react';
import discordLogo from '../assets/discord.png';

export default function Login() {
  return (
    <div className="min-h-screen w-full flex justify-center items-start bg-slate-900">
      <form className=" mt-20 flex flex-col items-center p-3 text-slate-300">
        <h1 className="text-2xl">Sign in with Discord:</h1>
        <a
          href="/auth/discord"
          className="bg-discord w-full flex justify-center items-center py-2 text-xl my-5 rounded hover:scale-105 transition-all"
        >
          <img src={discordLogo} className="w-10 h-10" />
        </a>
      </form>
    </div>
  );
}
