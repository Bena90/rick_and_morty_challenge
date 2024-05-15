import { useMemo } from 'react';
import { EpisodeEmpty } from './episode_empty';
import { EpisodeItem } from './episode_item';
import { ListLayout } from './list_layout';

export function CompareList({
  episodes,
  isLoading
}: {
  episodes?: string[];
  isLoading: boolean;
}) {

  const content = useMemo(() => {
    if (!episodes) {
      return <EpisodeEmpty text="The selected characters do not share any episode" />;
    }
    if (episodes.length === 0) {
      return <EpisodeEmpty text="Please, select both characters" />;
    }
    return episodes.map((episode) => <EpisodeItem key={episode} episode={episode} />);
  }, [episodes]);

  return (
    <ListLayout>
      <div className='flex justify-between'>
        <p className="text-xl font-light">Episodes together:</p>
        <p className='text-left font-light text-green'>{isLoading && 'Loading...'}</p>
      </div>
      {content}
    </ListLayout>
  );
}

