import { Character } from "./character";
import { Pagination } from "./pagination";

export abstract class CharacterResponse {
  info:    Pagination;
  results: Character[];

  constructor(
    info: Pagination,
    results: Character[],
  ) {
    this.info = info;
    this.results = results;
  }
}


