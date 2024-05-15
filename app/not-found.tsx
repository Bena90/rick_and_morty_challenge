import notfound from '@/public/notfound.webp'
import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex justify-center items-center flex-col w-full h-screen gap-4'>
      <h2 className="text-green font-black text-4xl"> 404 Not Found!</h2>
      <Image
        src={notfound}
        alt="Character image"
        width={400}
        height={400}
        priority={false}
      />
      <Link href="/" className='bg-green rounded-xl px-3 py-2 text-slate-900'>Return Home</Link>
    </div>
  )
}