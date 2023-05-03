import React from 'react';
import { Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <div className="min-h-screen w-full bg-slate-800">
      <Outlet />
    </div>
  );
}
