import { Character } from "@/core/entities/character";
import { CharacterModel } from "@/core/models/character_model";
import { PaginationModel } from "@/core/models/pagination_model";

export const getCharacters = async({page = '1'}: {page?: string}) => {
  try {
    const response: Response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)

    if(!response.ok){
      throw new Error('Something went wrong!')
    }

    const data = await response.json();
    const pagination = PaginationModel.fromJson(data.info as unknown as{ [key: string]: never; })
    const characters = data.results?.map((item: Character) => CharacterModel.fromJson(item as unknown as{ [key: string]: never; }))

    return { pagination, characters };
  } catch (error) {
    console.log(error);
  }
}