import { Character } from '@/core/entities/character'
import { Pagination } from '@/core/entities/pagination'
import { CharacterModel } from '@/core/models/character_model'
import { PaginationModel } from '@/core/models/pagination_model'
import { useEffect, useState } from 'react'

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

export const useCharacters = () => {
  const [ pagination, setPagination] = useState<Pagination>()
  const [ currentPage, setCurrentPage] = useState<string>('1')
  const [ characters, setCharacters] = useState<Character[]>()
  const [ isLoading, setIsLoading] = useState<boolean>(true)
  const [ isError, setIsError] = useState<boolean>(false)

  const handlePage = ({page = '1'}: {page?: string | number}) => {
    const pageStr = page.toString();

    getCharacters({page: pageStr})
      .then(response => {
        setCharacters(response?.characters);
        setPagination(response?.pagination);
      })
      .catch(error => setIsError(error))
      .finally(() => setIsLoading(false));
    setCurrentPage(pageStr);
  } 
  
  useEffect(() => {
    handlePage({})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    characters,
    isLoading,
    isError,
    currentPage,
    pagination,
    handlePage
  }
}
