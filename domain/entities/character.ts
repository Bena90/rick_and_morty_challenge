export abstract class Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: string[];
  url: string;

  constructor(
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    image: string,
    episode: string[],
    url: string,
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.species = species;
    this.type = type;
    this.gender = gender;
    this.image = image;
    this.episode = episode;
    this.url =   url;
  }
}