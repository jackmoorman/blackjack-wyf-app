import React from 'react';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export default function Header() {
  const user = useSelector((state: RootState) => state.user);
  return (
    <header className="flex justify-between text-amber-300 py-5 px-10">
      <h1>BJWFY</h1>
      <ul className="flex gap-5">
        {user.id ? (
          <>
            <li>{user.username}</li>
            <li>
              <LogoutButton />
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        <li>
          <Link to="/stats">Stats</Link>
        </li>
      </ul>
    </header>
  );
}
