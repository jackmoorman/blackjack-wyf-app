import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Outlet } from 'react-router';

export default function GameLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth() {
      const req = await fetch('/auth/verify', { credentials: 'include' });
      const res = await req.json();
      if (!res.isAuthenticated || !res.user) navigate('/login');
    }

    checkAuth();
  }, []);

  return <Outlet />;
}
