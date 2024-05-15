export abstract class Episode {
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
}