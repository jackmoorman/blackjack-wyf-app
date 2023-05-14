import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

export default function GameRootLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth() {
      const req = await fetch('/auth/verify', { credentials: 'include' });
      const res = await req.json();
      if (!res.isAuthenticated) navigate('/login');
    }

    checkAuth();
  }, []);

  return <Outlet />;
}
