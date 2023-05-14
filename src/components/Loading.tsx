import React, { useState, useEffect, useRef } from 'react';

export default function Loading({ text }: { text: string }) {
  const [loadingState, setLoadingState] = useState('');
  const intervalRef = useRef<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      if (intervalRef.current.length === 3) intervalRef.current = '';
      else intervalRef.current += '.';

      setLoadingState(intervalRef.current);
    }, 500);

    return () => clearInterval(timer);
  }, []);
  return (
    <h1>
      {text}
      {loadingState}
    </h1>
  );
}
