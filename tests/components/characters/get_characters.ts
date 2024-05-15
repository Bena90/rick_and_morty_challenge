import { getCharacters } from "@/app/services/getCharacters";
import { CharacterModel } from "@/core/models/character_model";
import { PaginationModel } from "@/core/models/pagination_model";

describe('Test in Episode Item', () => {
  
  test('getCharacters should return a valid Model object', async() => {
    const response = await getCharacters({page: "1"});

    if (response !== null) {
      expect(response?.characters).toBeInstanceOf(CharacterModel);
      expect(response?.pagination).toBeInstanceOf(PaginationModel);
    } else {
      fail('Expected response to be an instance of EpisodeModel, but got null');
    }
  });
});
