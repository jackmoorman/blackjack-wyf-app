import React from 'react';
import { Outlet } from 'react-router';

export default function LogoutLayout() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center pt-8 bg-slate-900 text-amber-300">
      <Outlet />
    </main>
  );
}
