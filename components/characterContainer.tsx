import localFont from 'next/font/local';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
}

const myFont = localFont({ src: '../core/fonts/rick.ttf' })

export default function CharacterContainer (
  {
    children,
    title,
  }: Props) {

  return (
    <div className='flex-1 bg-slate-900 rounded-[24px] p-8'>
      <h2 className={`${myFont.className} text-3xl text-green mb-2`}>{title}</h2>
      <div className='grid grid-cols-2 w-full gap-6'>
        {children}
      </div>
    </div>
  )
}
