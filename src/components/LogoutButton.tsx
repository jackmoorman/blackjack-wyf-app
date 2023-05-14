import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from '../features/loadingSlice';
import { RootState } from '../app/store';
import { useNavigate } from 'react-router';

export default function LogoutButton() {
  const loading = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  async function logout() {
    const req = await fetch('/auth/logout', { credentials: 'include' });
    const res = await req.json();
    if (res.success) navigate('/logout/success');
    else return alert('Error logging out: ' + res.message);
    console.log(res);
  }
  return <button onClick={logout}>Logout</button>;
}
