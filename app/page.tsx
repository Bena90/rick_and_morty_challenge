import { CharactersGrid } from '@/components/characters.tsx/characters_grid';
import { EpisodesGrid } from '@/components/episodes/episodes_grid';
import title from '@/public/title.webp';
import Image from 'next/image';

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col gap-[30px]">
      <div>
        <div className='flex justify-center'>
          <Image
            src={title}
            alt="Character image"
            width={300}
            height={400}
            priority={false}
          />
        </div>
        <h1 className="text-4xl text-left font-black tracking-wider">
          <span className=""><span className='text-green'> Rick and Morty </span>Challenge</span>
        </h1>
        <h2 className='text-xl text-slate-200 font-normal tracking-wider'>On this website you can select two Rick and Morty characters and compare in which episodes they appear together.</h2>
      </div>
      <h4 className='text-xl text-slate-200 font-thin tracking-wider'><span className='text-pink font-normal'>1 - </span>First, select two character.</h4>
      <CharactersGrid />
      <EpisodesGrid />
    </main>
  );
}
