import { ReactNode } from "react";

export function ListLayout({children}: {children: ReactNode}) {

  return (
    <div className='rounded-[24px] p-3'>
      <div className='flex flex-col bg-neutral-950 w-full gap-4 min-h-[400px] max-h-[400px] scroll-auto overflow-y-auto scrollbar p-4 rounded-2xl border border-slate-800'>
        {children}
      </div>
    </div>
  );
}