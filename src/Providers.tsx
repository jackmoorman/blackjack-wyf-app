import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

export const authContext = createContext({});

export default function Providers({ children }: { children: React.ReactNode }) {
  const userObject = {
    isLoggedIn: false,
    data: {},
  };

  const [user, setUser] = useState(userObject);

  useEffect(() => {
    async function getUser() {
      const user = await fetch('/api/user');
    }
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
}
