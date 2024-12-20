'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/leads');
  }, []);
  return <div className='flex justify-center items-center flex-1'> <p className='font-bold text-3xl'>Loading...</p></div>;
}
