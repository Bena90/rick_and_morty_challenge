import { CharactersList } from '@/components/characters.tsx/characters_list';
import title from '@/public/title.webp';
import localFont from 'next/font/local';
import Image from 'next/image';

const myFont = localFont({ src: '../core/fonts/rick.ttf' })

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col gap-[20px]">
      <div>
        {/* <h1 className="text-4xl text-left font-black tracking-wider">
          <span className="">Ssr. Frontend Developer -</span>
          <span className="text-green">&nbsp;NextJS</span>
        </h1> */}
        <div className='flex justify-center'>
          <Image
            src={title}
            alt="Character image"
            width={400}
            height={400}
            priority={false}
          />
        </div>
        <p className='text-2xl text-slate-200 mt-4 font-black tracking-wider'> Please choose character 1 and character 2 first</p>
      </div>

      <CharactersList />

      <section className="flex w-full gap-4">
        <div className='flex-1'>
          <h3 className={`${myFont.className} text-4xl text-green`}>Episodes</h3>
        </div>
      </section>

    </main>
  );
}
