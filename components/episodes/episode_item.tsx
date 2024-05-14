'use client'
import { useEffect, useState } from "react";

export interface Episode {
  id:         number;
  name:       string;
  air_date:   string;
  episode:    string;
  characters: string[];
  url:        string;
  created:    Date;
}

export function EpisodeItem({url}: {url: string}) {
  const [ episode, setEpisode ] = useState<Episode>()
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const getEpisode = async(episode: string) => {
      if(!episode) return;
      const data: Episode = await fetch(episode).then( res => res.json())
      if (data) setEpisode(data);
    }

    try {
      getEpisode(url);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }, [url])

  if(!episode) return

  return (
    <div className="flex flex-col bg-slate-900 rounded-xl p-2 border border-slate-800 hover:bg-slate-800  hover:border-slate-700 ">
      <div>
        <span className="font-bold tracking-wider text-green truncate">{episode.name}</span>
      </div>

      <div className="flex gap-4">
        <div className="flex gap-2">
          <span className="">Ep.:</span>
          <span className="font-thin"> {episode.episode}</span>
        </div>
        <div>
          <span className="">Date:</span>
          <span className="font-thin"> {episode.air_date}</span> 
        </div>
      </div>
    </div>
  );
}