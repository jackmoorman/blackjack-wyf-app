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
    <div className="flex justify-center min-h-screen w-full pt-28">
      <h1 className="text-amber-300 text-3xl">
        {text}
        {loadingState}
      </h1>
    </div>
  );
}
