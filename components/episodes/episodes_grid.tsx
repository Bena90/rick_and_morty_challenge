'use client'
import localFont from 'next/font/local';
import { CompareList } from './compare_list';
import { EpisodesList } from './episodes_list';
import { useEpisodes } from './use_episodes/use_episodes';

const myFont = localFont({ src: '../../core/fonts/rick.ttf' })

export function EpisodesGrid() {
  const { episodesA, episodesB, episodesCompare, characterA, characterB } = useEpisodes();

  return (
    <section className="flex flex-col w-full gap-4">
      <h3 className={`${myFont.className} text-4xl text-green`}>Episodes</h3>
      <h4 className='text-xl text-slate-200 font-thin tracking-wider'><span className='text-pink font-normal'>2 - </span>Now, you can compare which episodes the selected characters share.</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <EpisodesList episodes={episodesA} characterName={characterA} />
        <CompareList episodes={episodesCompare} />
        <EpisodesList episodes={episodesB} characterName={characterB} />
      </div>
    </section>
  );
}
