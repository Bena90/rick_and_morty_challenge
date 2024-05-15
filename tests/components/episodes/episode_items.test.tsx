import { EpisodeItem, getEpisode } from '@/components/episodes/episode_item';
import { EpisodeModel } from '@/core/models/episode_model';
import { render } from '@testing-library/react';

describe('Test in Episode Item', () => {
  const episode: string = "https://rickandmortyapi.com/api/episode/1"
  
  test('getEpisode should return a valid EpisodeModel object', async() => {
    const response = await getEpisode(episode);

    if (response !== null) {
      expect(response).toBeInstanceOf(EpisodeModel);
      expect(response).toHaveProperty('id');
      expect(response).toHaveProperty('name');
      expect(response).toHaveProperty('airDate');
      expect(response).toHaveProperty('episode');
      expect(response).toHaveProperty('characters');
      expect(response).toHaveProperty('url');
      expect(response).toHaveProperty('created');
    } else {
      fail('Expected response to be an instance of EpisodeModel, but got null');
    }
  });

  test('getEpisode should response undefined if url it`s wrong', async () => {
    const resp = await getEpisode('episode');

    expect(resp).toBeUndefined();
  });

  test('episode item should match with snapshot', () => {
    const {container} = render( <EpisodeItem episode={ episode } /> );

    expect( container ).toMatchSnapshot();
  })

});
