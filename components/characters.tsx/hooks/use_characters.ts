import { Character } from '@/core/entities/character'
import { Pagination } from '@/core/entities/pagination'
import { CharacterModel } from '@/core/models/character_model'
import { PaginationModel } from '@/core/models/pagination_model'
import { useEffect, useState } from 'react'

export const useCharacters = () => {
  const [ pagination, setPagination] = useState<Pagination>()
  const [ currentPage, setCurrentPage] = useState<string>('1')
  const [ characters, setCharacters] = useState<Character[]>()
  const [ isLoading, setIsLoading] = useState<boolean>(true)
  const [ isError, setIsError] = useState<boolean>(false)

  const getCharacters = async({page = '1'}: {page?: string}) => {
    setIsLoading(true)
    await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then( res => res.json()
      .then((data) => {
        if(data.error) throw new Error(data.error)
        
        setCharacters(data.results?.map((item: Character) => CharacterModel.fromJson(item as unknown as{ [key: string]: never; })) );
        setPagination(PaginationModel.fromJson(data.info as unknown as{ [key: string]: never; }));
      })
      .catch((error) =>{setIsError(error)})
      .finally(() => setIsLoading(false))
    );

  };

  const handlePage = ({page = '1'}: {page?: string | number}) => {
    const pageStr = page.toString();

    getCharacters({page: pageStr})
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
