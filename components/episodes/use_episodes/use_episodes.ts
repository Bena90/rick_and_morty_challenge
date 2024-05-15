import { useAppSelector } from '@/store'
import { CharacterEpisodesState } from '@/store/character/episodesSlice'
import { useEffect, useState } from 'react'

export const useEpisodes = () => {
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

  return {
    episodesA: characterSelected[1]?.episode,
    episodesB: characterSelected[2]?.episode,
    episodesCompare: compare,
    characterA: characterSelected[1]?.name,
    characterB: characterSelected[2]?.name,
  }
}
