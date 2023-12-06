import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://ndt.zooky.online' + window.location.pathname;
  }, []);

  return null;
}
