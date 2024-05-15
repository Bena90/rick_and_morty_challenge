import { EpisodeEmpty } from "./episode_empty";
import { EpisodeItem } from "./episode_item";
import { ListLayout } from "./list_layout";

export function EpisodesList({
  episodes, characterName
}: {
  episodes?: string[],
  characterName?: string,
}) {

  return (
    <ListLayout>
      <div>
      <span className="text-xl font-light">Character: </span>
      <span className="text-xl text-pink font-black tracking-wider	">
        {characterName ?? 'Not selected'}
      </span>
      </div>
      {episodes
        ? episodes?.map((url) => <EpisodeItem key={url} episode={url} />)
        : <EpisodeEmpty text="Please, select one character" />
      }
    </ListLayout>
  );
}

