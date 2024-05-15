'use client'
import { useAppSelector } from '@/store';
import { CharacterEpisodesState } from '@/store/character/episodesSlice';
import localFont from 'next/font/local';
import { useEffect, useState } from 'react';
import { CompareList } from './compare_list';
import { EpisodesList } from './episodes_list';

const myFont = localFont({ src: '../../core/fonts/rick.ttf' })

export function EpisodesGrid() {
  const characterSelected = useAppSelector(state => state.episodes)
  const [compare, setCompare] = useState<string[]>()
  
  useEffect(() => {
    if( !characterSelected[1] || !characterSelected[2] ) {
      setCompare([]);
      return;
    };

    const postEpisodes = async({episodes}: {episodes: CharacterEpisodesState}):Promise<any> => {
      const data = await fetch('/api/episodes',{
        method: 'POST',
        body: JSON.stringify(episodes),
      }).then((res) => res.json())
    
      setCompare(data.episodes);
    }
    postEpisodes({episodes: characterSelected});
  },[characterSelected])

  return (
    <section className="flex flex-col w-full gap-4">
      <h3 className={`${myFont.className} text-4xl text-green`}>Episodes</h3>
      <h4 className='text-xl text-slate-200 font-thin tracking-wider'><span className='text-pink font-normal'>2 - </span>Now, you can compare which episodes the selected characters share.</h4>
      <div className="grid grid-cols-3">
        <EpisodesList episodes={characterSelected[1]?.episode} characterName={characterSelected[1]?.name} />
        <CompareList episodes={compare} />
        <EpisodesList episodes={characterSelected[2]?.episode} characterName={characterSelected[2]?.name} />
      </div>
    </section>
  );
}
