import { Character } from "@/domain/entities/character";
import { CharacterDTO } from "../dto/character_dto";

export class CharacterModel implements Character {
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

  static fromJson(json: {[key: string]: never}): CharacterModel {
    return new CharacterModel(
      json[CharacterDTO.id] ?? 0,
      json[CharacterDTO.name] ?? 'N/A',
      json[CharacterDTO.status] ?? 'N/A',
      json[CharacterDTO.species] ?? 'N/A',
      json[CharacterDTO.type] ?? 'N/A',
      json[CharacterDTO.gender] ?? 'N/A',
      json[CharacterDTO.image] ?? 'N/A',
      json[CharacterDTO.episode] ?? [],
      json[CharacterDTO.url] ?? 'N/A',
    );
  }
}