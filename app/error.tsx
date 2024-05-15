'use client'
 
import rickandmorty from '@/public/error.webp'
import Image from 'next/image'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='flex justify-center items-center flex-col w-full h-screen gap-6'>
      <Image
        src={rickandmorty}
        alt="Character image"
        width={400}
        height={400}
        priority={false}
      />
      <h2 className="text-green font-black text-3xl">Something went wrong!</h2>
      <button
        className='bg-green rounded-xl px-3 py-2 text-slate-900'
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}