import { FETCH_ALBUMS, FETCH_ALBUM_PHOTOS } from '../actions/action-types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_ALBUMS:
      return action.payload;
    case FETCH_ALBUM_PHOTOS:
      return state.map(album => {
        if (album.id === action.payload.id) {
          album = {
            photos: action.payload.data,
            ...album
          };
        }

        return album;
      });
  }

  return state;
}