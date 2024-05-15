import { EpisodeEmpty } from './episode_empty';
import { EpisodeItem } from './episode_item';
import { ListLayout } from './list_layout';

export function CompareList({episodes}: {episodes?: string[]}) {

  return (
    <ListLayout>
      <p className="text-xl font-light">Episodes together:</p>
      {episodes === undefined
      ? <EpisodeEmpty text={"The selected characters do not share any episode"} />
      : episodes.length === 0
      ? <EpisodeEmpty text={"Please, selecte both characters"} />
      : episodes.map((episode) => <EpisodeItem key={episode} episode={episode} />)
      }
    </ListLayout>
  );
}

