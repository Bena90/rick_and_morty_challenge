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
    <li >
      <div
        className={`mx-2 flex h-9 w-9 items-center justify-center rounded-full p-0 text-md text-slate-800 transition duration-150 ease-in-out hover:bg-pink ${isActive ? 'bg-pink border-pink' : 'bg-green'} cursor-pointer`}
        onClick={onClick}
        aria-label="Previous"
      >
        {children}
      </div>
    </li>
  )
}

export function PaginationCharacter({
  count,
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
      <nav className="flex justify-center pt-4">
        <ul className="flex h-full justify-end items-end">
          {currentPage !== '1' && prev &&
          <PaginationItem onClick={() => onClick({page: getPage(prev)})}>
              <GrPrevious />
          </PaginationItem>}
          {prev &&
          <PaginationItem>
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
        </ul>
      </nav>
  );
}