import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';
import Header from '../components/Header';

export default function RootLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkAuth() {
      const req = await fetch('/auth/verify', { credentials: 'include' });
      const res = await req.json();
      if (res.isAuthenticated) {
        const { id, discord_id, email, username, chips } = res.user;
        dispatch(setUser({ id, discord_id, email, username, chips }));
      }
    }

    checkAuth();
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-900">
      <Header />
      <Outlet />
    </div>
  );
}
