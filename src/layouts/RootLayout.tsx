import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../features/authSlice';
import { setLoading } from '../features/loadingSlice';
import Header from '../components/Header';
import { RootState } from '../app/store';
import Loading from '../components/Loading';

export default function RootLayout() {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.loading);

  useEffect(() => {
    async function checkAuth() {
      dispatch(setLoading());
      const req = await fetch('/auth/verify', { credentials: 'include' });
      const res = await req.json();
      if (res.isAuthenticated) {
        const { id, discord_id, email, username, chips } = res.user;
        dispatch(setUser({ id, discord_id, email, username, chips }));
      }
      dispatch(setLoading());
    }
    checkAuth();
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-900">
      {!loading ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <Loading text="Loading" />
      )}
    </div>
  );
}
