import { Character } from '@/domain/entities/character';
import localFont from 'next/font/local';
import { CharacterCard } from './character_card';

interface Props {
  title: string;
  list: number;
}

const myFont = localFont({ src: '../../core/fonts/rick.ttf' })

const getCharacters = async({page = 1}: {page?: number}) => {
  const data = await fetch(`${process.env.BASE_URL}/character?page=${page}`)
    .then( res => res.json());
    
  return data.results;
};

export async function CharacterContainer ({ title, list }: Props) {
  const characters: Character[] = await getCharacters({});

  return (
    <div className='flex-1 rounded-[24px] p-3'>
      <h2 className={`${myFont.className} text-4xl text-green mb-4`}>{title}</h2>
      <div className='bg-neutral-950 grid grid-cols-2 w-full gap-6 max-h-[600px] overflow-y-auto scrollbar p-4 rounded-2xl border border-slate-800'>
        {
          characters.map((character) => <CharacterCard key={character.id} {...character} listNumber={list} />)
        }
      </div>
    </div>
  )
}
