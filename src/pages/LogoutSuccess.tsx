import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';

export default function LogoutSuccess() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setUser({
        id: null,
        discord_id: null,
        email: null,
        username: null,
        chips: null,
      })
    );
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <h1 className="text-3xl">Successfully logged out!</h1>
      <h3 className="text-xl mt-9">
        You will be redirected to the home page in a few seconds.
      </h3>
    </>
  );
}
