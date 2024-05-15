'use client'

import { Episode } from "@/core/entities/episode";
import { useEffect, useState } from "react";
import { EpisodeModel } from '../../core/models/episode_model';

export function EpisodeItem({episode}: {episode: string}) {
  const [ episodeInfo, setEpisodeInfo] = useState<Episode>()

  useEffect(() => {
    const getEpisode = async(episode: string) => {
      if(!episode) return;

      await fetch(episode)
        .then( res => res.json())
        .then((data) => {
          if (data) setEpisodeInfo(EpisodeModel.fromJson(data))
        })
        .catch((error) => console.log(error))
    }

    getEpisode(episode);
  }, [episode])

  if(!episodeInfo) return

  return (
    <div className="flex flex-col bg-slate-900 rounded-xl p-2 border border-slate-800 hover:bg-slate-800  hover:border-slate-700 ">
      <div className="truncate">
        <span className="font-bold tracking-wider text-green">{episodeInfo.name}</span>
      </div>

      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="flex gap-2 flex-col md:flex-row">
          <span className="">Ep.:</span>
          <span className="font-thin"> {episodeInfo.episode}</span>
        </div>
        <div className="flex-col md:flex-row">
          <span className="">Date:</span>
          <span className="font-thin"> {episodeInfo.airDate}</span> 
        </div>
      </div>
    </div>
  );
}