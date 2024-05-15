import { getCharacters } from '@/app/services/getCharacters'
import { Character } from '@/core/entities/character'
import { Pagination } from '@/core/entities/pagination'
import { useEffect, useState } from 'react'

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
