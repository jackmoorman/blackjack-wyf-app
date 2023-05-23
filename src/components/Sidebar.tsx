import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export default function Sidebar() {
  const users = useSelector((state: RootState) => state.gameState.users);
  console.log('USERS: ', users);

  return (
    <aside className="w-1/6 max-w-sm flex flex-col gap-4 px-3">
      <h1 className="text-xl border-b border-b-amber-300">Players:</h1>
      {users.map((user: User, index: number) => {
        return (
          <div key={index} className="">
            <p>{user.username}</p>
            <p>{user.chips}</p>
          </div>
        );
      })}
    </aside>
  );
}
