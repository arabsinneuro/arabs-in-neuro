import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Volunteer() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/join'); 
  }, [router]);

  return null;
}
