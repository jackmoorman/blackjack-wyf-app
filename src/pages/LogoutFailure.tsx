import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';

export default function LogoutFailure() {
  return (
    <div className="flex flex-col items-center pt-8">
      <h1 className="text-2xl">There was an error logging out.</h1>
      <p className="mt-12">Please try again below:</p>
      <LogoutButton />
      <p className="mt-12">
        Or Return{' '}
        <Link to="/" className="shadow shadow-amber-300 rounded py-2 px-5 m-3">
          HOME
        </Link>
      </p>
    </div>
  );
}
