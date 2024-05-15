'use client'
import localFont from 'next/font/local';
import { LoadingSpinner } from '../loading';
import { CharacterCard } from './character_card';
import { useCharacters } from './hooks/use_characters';
import { PaginationCharacter } from './pagination_character';

interface Props {
  title: string;
  list: number;
}

const myFont = localFont({ src: '../../core/fonts/rick.ttf' })

export function CharacterContainer ({ title, list }: Props) {
  const {
    characters,
    isLoading,
    isError,
    currentPage,
    pagination,
    handlePage
  } = useCharacters();
  
  if(isError) return <div>Please, try again later.</div>

  return (
    <div className='flex-1 rounded-[24px] p-3'>
      <h3 className={`${myFont.className} text-4xl text-green mb-4`}>{title}</h3>
      <div className={`bg-neutral-950 w-full max-h-[600px] min-h-[600px] overflow-y-auto scrollbar p-4 rounded-2xl border border-slate-800`}>
        {isError} <div>{isError}</div>
        { isLoading
        ? <LoadingSpinner />
        : <>
          <div className={`grid ${isLoading ? 'grid-cols-1' : 'grid-cols-2'} w-full gap-6`}>
            { characters?.map((character) => <CharacterCard key={character.id} {...character} listNumber={list} />) }
          </div>
          {characters && <PaginationCharacter {...pagination} currentPage={currentPage} onClick={handlePage}/>}
        </>
        }
      </div>
    </div>
  )
}
