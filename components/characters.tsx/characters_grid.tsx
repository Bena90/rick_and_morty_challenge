import { CharacterContainer } from "./character_container";

export async function CharactersGrid (){

  return (
    <section className="flex w-full gap-6 h-full flex-col lg:flex-row">
      <CharacterContainer title='Character # 1' list={1} />
      <CharacterContainer title='Character # 2' list={2} />
    </section>
  )
}
