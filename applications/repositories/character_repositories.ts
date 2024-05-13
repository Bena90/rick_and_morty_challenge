import { CharacterRemoteService } from "@/data/remote/character_service";
import { Character } from "@/domain/entities/character";
import { CustomError } from "@/domain/entities/error";
import { ICharacterPresenter } from "@/domain/presenters/character_presenter";

export class CharacterRepository implements ICharacterPresenter {
  _remoteService: CharacterRemoteService;

  constructor(remoteService: CharacterRemoteService) {
    this._remoteService = remoteService;
  }

  async getCharacters(): Promise<Character[] | CustomError> {
    return this._remoteService.getCharacters();
  }

  async getEpisodes(): Promise<Character[] | CustomError> {
    return this._remoteService.getEpisodes();
  }
}
