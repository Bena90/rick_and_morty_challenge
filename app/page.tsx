
import CharacterCard from '@/components/characterCard';
import CharacterContainer from '@/components/characterContainer';
import localFont from 'next/font/local';

const myFont = localFont({ src: '../core/fonts/rick.ttf' })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8 gap-[20px]">
      <div>
        <h1 className="text-4xl text-left font-black tracking-wider">
          <span className="">Ssr. Frontend Developer -</span>
          <span className="text-green">&nbsp;NextJS</span>
        </h1>
        <p className='text-1xl text-slate-300 mb-4 font-light'> Please choose character 1 and character 2 first</p>
      </div>

      <section className="flex w-full gap-6 h-full">
        <CharacterContainer title='Character # 1'>
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
        </CharacterContainer>

        <CharacterContainer title='Character # 2'>
          <CharacterCard />
          <CharacterCard />
        </CharacterContainer>
      </section>
{/* 
      <section className="flex w-full gap-4">
        <div className='flex-1'>
          <h3 className={`${myFont.className} text-3xl text-green`}>Section 3</h3>
        </div>
      </section> */}

    </main>
  );
}
