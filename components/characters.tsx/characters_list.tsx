import { CharacterContainer } from "./character_container";



export async function CharactersList (){

  return (
    <section className="flex w-full gap-6 h-full">
      <CharacterContainer title='Character # 1' />
      <CharacterContainer title='Character # 2' />
    </section>
  )
}
