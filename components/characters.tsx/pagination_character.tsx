import { ReactNode } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

interface Props{
  count?: number;
  pages?: number;
  next?:  string;
  prev?:  string;
  currentPage: string;
  onClick: ({page}: {page?: string | number}) => void;
}

const PaginationItem = ({
  onClick,
  isActive,
  children
}: {
  onClick?: () => void,
  isActive?:boolean,
  children: ReactNode;
}) => {
  return(
      <div
        className={`mx-2 flex h-9 w-9 items-center justify-center rounded-full p-0 text-md text-slate-400 border transition duration-150 ease-in-out hover:bg-green ${isActive ? 'bg-pink border-pink text-slate-700' : 'bg-slate-900 border-slate-800'} cursor-pointer`}
        onClick={onClick}
        aria-label="Previous"
      >
        {children}
      </div>
  )
}

export function PaginationCharacter({
  pages,
  next,
  prev,
  currentPage,
  onClick,
}: Props) {

  const getPage = (url: string) => {
    if(!url) return;
    const parsedUrl = new URL(url);

    const params = new URLSearchParams(parsedUrl.search);
    const page = params.get('page');

    return page ?? '1';
  }

  return (
      <nav className="flex justify-center pt-5 pb-2">
        <div className="flex h-full justify-end items-end">
          {currentPage !== '1' && prev &&
          <PaginationItem onClick={() => onClick({page: getPage(prev)})}>
              <GrPrevious />
          </PaginationItem>}
          {prev &&
          <PaginationItem onClick={() => onClick({page: getPage(prev)})}>
            {getPage(prev)}
          </PaginationItem>}
          <PaginationItem isActive>
            {currentPage}
          </PaginationItem>
          {next &&
          <PaginationItem onClick={() => onClick({page: getPage(next)})}>
            {getPage(next)}
          </PaginationItem>}
          {pages && (currentPage !== (pages - 1).toString()) &&
          <div className="mx-1">
            ...
          </div>}
          {pages && (currentPage !== pages?.toString() && currentPage !== (pages-1).toString()) &&
          <PaginationItem onClick={() => onClick({page: pages})}>
            {pages}
          </PaginationItem>}
          {next &&
          <PaginationItem onClick={() => onClick({page: getPage(next)})}>
            <GrNext />
          </PaginationItem>}
        </div>
      </nav>
  );
}