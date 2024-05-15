'use client'
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleSelected } from '@/store/character/episodesSlice';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaCircle, FaMinus, FaPlus } from "react-icons/fa";
import { PiAlien, PiFinnTheHuman, PiRobot } from "react-icons/pi";

interface Props {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  episode: string[];
  listNumber: number;
}

const COLOR: { [key: string]: string } = {
  alive: '#97ce4c',
  dead: '#e4a788',
  unknown: '#CDCDCD',
}

const getSpecieIcon = (specie: string) => {
  const icons: { [key:string]: JSX.Element } = {
    alien: <PiAlien />,
    human: <PiFinnTheHuman />
  }

  return icons[specie] ?? <PiRobot />
}

export function CharacterCard ({
  id,
  name,
  status,
  species,
  image,
  episode,
  listNumber,
}: Props){
  const [ isActive, setIsActive ] = useState<boolean>(false);

  const selectedCharacters = useAppSelector( state => state.episodes[listNumber] )
  const dispatch = useAppDispatch()

  const onToggle = () => {
    dispatch( toggleSelected({ 
      id,
      name,
      episode,
      list: listNumber,
    }))
  }

  useEffect(() => {
    if( selectedCharacters?.id === id ) {
      setIsActive(true);
      return
    }
    setIsActive(false);
  }, [id, selectedCharacters])

  return (
    <div className='relative h-full'>
      <div className='flex justify-center'>
        <div className={`h-[50px] flex-1 bg-slate-900 rounded-t-3xl border-t border-l ${isActive ? 'border-pink' : 'border-slate-800'}`}>
        <div className='relative overflow-hidden w-[100px] h-auto pl-3 pt-3'>
          <div className='rounded-2xl overflow-hidden'>
            <Image
              src={image}
              alt="Character image"
              width={150}
              height={150}
              priority={false}
            />
          </div>
        </div>
        </div>
        <div className='relative'>
          <div className='relative z-10 flex items-center justify-center h-[50px] w-[50px] rounded-full bg-slate-950'>
            <div 
              onClick={onToggle}
              className={`flex items-center justify-center bg-green h-[70%] w-[70%] rounded-full cursor-pointer hover:opacity-50 border-lime-300 border ${isActive && 'bg-pink border-pink'}`}>
              {isActive
                ? <FaMinus fill=''/>
                : <FaPlus fill=''/>}
            </div>
          </div>
          <div className='absolute bottom-0 h-[25px] w-[50px] rounded-br-full bg-slate-900'/>
        </div>
      </div>
      <div className={`bg-slate-900 rounded-tr-3xl rounded-b-3xl border-l border-b border-r h-[160px] p-3 pt-16 ${isActive ? 'border-pink' : 'border-slate-800'}`}>
        <p className={`text-xl font-black truncate ${isActive ? 'text-pink' : ''}`}>
          {name}
        </p>
        <div className='flex items-center gap-2 font-thin'>
          <span className='font-normal'>
            Specie:
          </span>
          {species} {getSpecieIcon(species.toLowerCase())}
        </div>
        <div className='flex items-center gap-2 font-thin'>
          <span className='font-normal'>
            Status:
          </span>
          <FaCircle size={12} fill={COLOR[status.toLowerCase()]}/>
          <span>
          {status}
          </span>
        </div>
      </div>
    </div>
  )
}
