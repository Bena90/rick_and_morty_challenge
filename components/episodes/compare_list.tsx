import { EpisodeEmpty } from './episode_empty';
import { EpisodeItem } from './episode_item';
import { ListLayout } from './list_layout';

export interface Episode {
  id:         number;
  name:       string;
  air_date:   string;
  episode:    string;
  characters: string[];
  url:        string;
  created:    Date;
}

export function CompareList({episodes}: {episodes?: string[]}) {

  return (
    <ListLayout>
      {episodes === undefined
      ? <EpisodeEmpty text={"The selected characters do not share any episode"} />
      : episodes.map((episode) => <EpisodeItem key={episode} url={episode} />)
      }
    </ListLayout>
  );
}

