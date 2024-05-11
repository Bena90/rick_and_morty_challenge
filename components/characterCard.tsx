import card from '@/public/card.png';
import Image from 'next/image';

export default function CharacterCard (){
  return (
    <div className='h-full'>
      <Image
        src={card}
        alt="Picture of the author"
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  )
}
