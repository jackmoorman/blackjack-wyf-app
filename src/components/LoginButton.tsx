import React from 'react';
import { useState, useEffect } from 'react';

export default function LoginButton({
  providerName,
}: {
  providerName: string;
}) {
  const [provider, setProvider] = useState('');

  useEffect(() => {
    setProvider(providerName[0].toUpperCase() + providerName.slice(1));
  }, []);

  return <a href={`/auth/${providerName}`}>{provider}</a>;
}
