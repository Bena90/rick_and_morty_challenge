import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CharacterEpisodes {
  id?: number;
  list?: number;
  name?: string;
  episode?: string[];
}

export interface CharacterEpisodesState {
  [key: string]: CharacterEpisodes;
}

const initialState: CharacterEpisodesState = {
}

const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    toggleSelected( state, action: PayloadAction<CharacterEpisodes>) {
      const character = action.payload

      if(!character.list) return
      if(state[character.list]?.id === character.id) {
        delete state[character.list];
        return;
      } 

      state[character.list] = character;
    }
  }
});

export const { toggleSelected } = episodesSlice.actions

export default episodesSlice.reducer