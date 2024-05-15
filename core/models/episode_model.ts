import { EpisodeAdapter } from "../adapters/episode_adapter";
import { Episode } from "../entities/episode";

export class EpisodeModel implements Episode {
  id: number;
  name: string;
  airDate: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;

  constructor(
    id: number,
    name: string,
    airDate: string,
    episode: string,
    characters: string[],
    url: string,
    created: Date,
  ) {
    this.id = id
    this.name = name
    this.airDate = airDate
    this.episode = episode
    this.characters = characters
    this.url = url
    this.created = created
  }

  static fromJson(json: { [key: string]: never }): EpisodeModel {
    return new EpisodeModel(
      json[EpisodeAdapter.id] ?? '',
      json[EpisodeAdapter.name] ?? '',
      json[EpisodeAdapter.airDate] ?? '',
      json[EpisodeAdapter.episode] ?? '',
      json[EpisodeAdapter.characters] ?? [],
      json[EpisodeAdapter.url] ?? '',
      json[EpisodeAdapter.created] ?? '',
    );
  }
}