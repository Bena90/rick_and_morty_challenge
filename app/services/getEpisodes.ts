import { EpisodeModel } from "@/core/models/episode_model";

export const getEpisode = async(episode: string) => {
  if(!episode) return;

  try {
    const response = await fetch(episode)
    if(!response.ok) {
      throw new Error('Something went wrong!');
    }

    const infoEpisode = EpisodeModel.fromJson(await response.json())

    return infoEpisode
  } catch (error) {
    console.log(error);
  }
}
