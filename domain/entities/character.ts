export abstract class Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  episode: string[];

  constructor(
    id: number,
    name: string,
    status: string,
    species: string,
    image: string,
    episode: string[],
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.species = species;
    this.image = image;
    this.episode = episode;
  }
}