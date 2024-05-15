import { CharacterAdapter } from "../adapters/character_adapter";
import { Character } from "../entities/character";

export class CharacterModel implements Character{
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

  static fromJson(json: { [key: string]: never }): CharacterModel {
    return new CharacterModel(
      json[CharacterAdapter.id] ?? 'N/A',
      json[CharacterAdapter.name] ?? 'N/A',
      json[CharacterAdapter.status] ?? 'N/A',
      json[CharacterAdapter.species] ?? 'N/A',
      json[CharacterAdapter.image] ?? 'N/A',
      json[CharacterAdapter.episode] ?? [],
    );
  }
}